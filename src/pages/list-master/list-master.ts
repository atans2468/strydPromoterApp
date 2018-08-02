import { Component } from '@angular/core';
import { NavController, ModalController, AlertController, ToastController, LoadingController, NavParams } from 'ionic-angular';
import { Push, PushObject, PushOptions } from '@ionic-native/push';
import {Camera, CameraOptions} from '@ionic-native/camera';

import firebase from 'firebase';
import moment from 'moment';

@Component({
  selector: 'page-list-master',
  templateUrl: 'list-master.html'
})
export class ListMasterPage {
  text: string = "";
  posts: any[] = [];
  pageSize: number = 10;
  cursor: any;
  infiniteEvent: any;
  image: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private loadCtrl: LoadingController, private toastCtrl: ToastController, private camera: Camera) {
  
    this.getPosts();

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FeedPage');
  }

  getPosts(){

    this.posts = [];

    let loading = this.loadCtrl.create({
      content: "Loading feed..."
    });

    loading.present();

    let query = firebase.firestore().collection("allPosts").orderBy("created", "desc").limit(this.pageSize);
    
    // ~~~!!!REALTIME UPDATES!!!~~~
    // query.onSnapshot((snapshot) => {
    //   let changedDocs = snapshot.docChanges();

    //   changedDocs.forEach((change) => {
    //     if(change.type == 'added'){
    //       //todo

    //     }else if (change.type == 'modified'){
    //       //todo
    //       console.log("Document with ID " + change.doc.id + " has been modified!")
    //     }else if (change.type == 'removed'){
    //       //todo

    //     }
    //   })
    // })

    query.get().then((docs) => {

      docs.forEach((doc) => {
        this.posts.push(doc);
      })
      loading.dismiss();

      console.log(this.posts);

      this.cursor = this.posts[this.posts.length - 1];

    }).catch((err) => {
      console.log(err);
    })

  }

  loadMorePosts(event){

    firebase.firestore().collection("posts").orderBy("created", "desc").startAfter(this.cursor).limit(this.pageSize).get().then((docs) => {
      
      docs.forEach((doc) => {
        this.posts.push(doc);
      })

      console.log(this.posts);

      if (docs.size < this.pageSize){
        //all documents have been loaded
        event.enable(false);
        this.infiniteEvent = event;
      }else {
        event.complete();
        this.cursor = this.posts[this.posts.length - 1];
      }

    }).catch((err) => {
      console.log(err);
    })
  }

  refresh(event){
    this.posts = [];

    this.getPosts();

    if(this.infiniteEvent){
      this.infiniteEvent.enable(true);
    }

    event.complete();
  }

  post(){
    firebase.firestore().collection("posts").add({
      text: this.text,
      created: firebase.firestore.FieldValue.serverTimestamp(),
      owner: firebase.auth().currentUser.uid,
      owner_name: firebase.auth().currentUser.displayName
    }).then( async (doc) =>{
      console.log(doc);

      if(this.image){
        await this.upload(doc.id)
      }

      this.text = '';
      this.image = undefined;

      let toast = this.toastCtrl.create({
        message: "Your post was submitted successfully",
        duration: 3000,
        position: 'top'
      }).present();

      this.getPosts();

    }).catch((err) => {
      console.log(err);
    })
  }

  ago(time){
    let difference = moment(time).diff(moment());
    return moment.duration(difference).humanize();
  }

  addPhoto(){

    this.launchCamera();
    
  }

  launchCamera(){
    let options: CameraOptions = {
      quality: 100,
      sourceType: this.camera.PictureSourceType.CAMERA,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.PNG,
      mediaType: this.camera.MediaType.PICTURE,
      correctOrientation: true,
      targetHeight: 512,
      targetWidth: 512,
      allowEdit: true
    }

    this.camera.getPicture(options).then((base64Image) => {
      console.log(base64Image);
      
      this.image = "data:image/png;base64," + base64Image;
    }).catch((err) => {
      console.log(err);
    })
  }

  upload(name: string){

    return new Promise((resolve, reject) => {
      
      let ref = firebase.storage().ref("postImages/" + name);
      
      let uploadTask = ref.putString(this.image.split(',')[1], "base64")
  
      uploadTask.on("state_changed", (taskSnapshot) => {
        console.log(taskSnapshot)
      }), (error) => {
        console.log(error)
      }, () => {
        console.log("The upload has completed");
  
        uploadTask.snapshot.ref.getDownloadURL().then((url) => {
          
          firebase.firestore().collection("posts").doc(name).update({
            image: url
          }).then(() => {
            resolve()
          }).catch((err) => {
            reject()
          })
  
        })
      }

    })
  
  }
}
