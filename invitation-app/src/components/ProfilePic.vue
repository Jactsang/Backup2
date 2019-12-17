<template>
  <div class="my-4">
    <h3>Take a Photo, say cheese!</h3>
    <p class="remark">* Photo only used for security purpose</p>
    <!-- <input style="display:none" type="file" @change="onFileSelected" ref="fileInput"/>
    <button @click="$refs.fileInput.click()">Pick Your Image</button>
    <button @click="onUpload">Upload</button>-->
    <ImageCropper />
    <div class="my-4">
      <picture-input
        ref="pictureInput"
        @change="onFileSelected"
        width="300"
        height="300"
        radius="50"
        margin="16"
        accept="image/jpeg, image/png"
        size="10"
        hideChangeButton="true"
        :removable="false"
        :customStrings="{
        upload: '<p>Your device does not support file uploading.</p>',
        drag: 'Drag an image or Click to select your image',
        tap: 'Tap here to select a photo from your gallery'
      }"
      ></picture-input>
    </div>
    <p class="message" :class="{'isHidden': this.isHidden}">Not Good Enough?</p>
    <vs-button
      color="dark"
      type="border"
      @click="$refs.pictureInput.onClick()"
      :class="{'isHidden': this.isHidden}"
    >Try Again
    </vs-button>
    <!-- button click to confirm -->
    <div class="my-4">
    <vs-row class="buttonSession" vs-w="12">
        <vs-col vs-lg="5" vs-sm="2" vs-xs="1"></vs-col>
      <vs-col class="submitLink" vs-type="flex" vs-justify="center" vs-align="center" vs-lg="2" vs-sm="8" vs-xs="10">
        <router-link to="/event">
        <vs-row>
        <vs-button class="btnSubmit" color="primary" type="filled">Confirm</vs-button>
        </vs-row>
        </router-link>
      </vs-col>
      <vs-col vs-lg="5" vs-sm="2" vs-xs="1"></vs-col>
    </vs-row>
    </div>
    <!-- {{ allInfo.email }}
    {{ allInfo.firstName }}
    {{ allInfo.lastName }}
    {{ allInfo.company }}
    {{ allInfo.visitPurpose }}
    {{ allInfo.emailPermission }}
    {{ allInfo.privacyAgreement }} -->
  </div>
</template>

<script>
import PictureInput from "vue-picture-input";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "BackupProfilePic",
  components: {
    PictureInput
  },
  data() {
    return {
      selectedFile: null,
      isDisabled: true,
      isHidden: true
    };
  },
  methods: {
    ...mapActions(["saveGuestData"]),
    onFileSelected() {
      if (this.$refs.pictureInput.image) {
        console.log("this.$refs.pictureInput: ", this.$refs.pictureInput.image);
        this.selectedFile = this.$refs.pictureInput.image;
        this.isDisabled = false;
        this.isHidden = false;
        const data = {};
        data["image"] = this.selectedFile;
        this.saveGuestData(data)
      } else {
        console.log("FileReader API not supported: use the <form>, Luke!");
        this.isDisabled = true;
        this.isHidden = true;
      }
    },
    onUpload(e) {
      e.preventDefault();
      const fd = new FormData();
      fd.append("image", this.selectedFile, this.selectedFile.name);
      //   axios.post('/path')
      //   .then(res => {
      //       console.log(res)
      //   })
    }
  },
  computed: mapGetters(["allInfo"])
};
</script>

<style>
.picture-preview {
  background-color: #f6f9ff !important;
  transition: 0.3s;
}

.picture-preview:hover {
  background-color: #ebf2ff !important;
  transition: 0.3s;
}

.picture-inner {
  border: none !important;
}

.my-4 {
  margin-top: 2rem;
  margin-bottom: 2rem;
}

.remark {
  color: #9f9f9f;
  font-size: 0.9rem;
}

.btnSubmit{
    text-align: center;
    width: 100%;
    font-size: 1.1rem;
}

.message{
  font-size: .9rem;
}

.isHidden{
  display: none;
}

.submitLink a{
  width: 100%;
}

</style>