<template>
  <div>
    <vs-row vs-w="12" type="flex" vs-justify="center" vs-align="center">
      <vs-col type="flex" vs-justify="center" vs-align="center" vs-lg="10">
        <div class="img-container">
          <vs-row type="flex" vs-justify="center" vs-align="center">
            <img ref="image" :src="src" crossorigin />
          </vs-row>
        </div>
      </vs-col>
      <vs-col type="flex" vs-justify="center" vs-align="center" vs-lg="10">
        <img :src="allInfo.image" class="img-preview" />
      </vs-col>
    </vs-row>
    <vs-button @click="SaveCropImg">Save</vs-button>
  </div>
</template>

<script>
import Cropper from "cropperjs";
import { mapGetters, mapActions } from "vuex";
export default {
  name: "BackupCropper",
  data() {
    return {
      cropper: {},
      destination: {},
      image: {}
    };
  },
  props: {
    src: String
  },
  methods: {
    ...mapActions(["saveProfilePic"]),
    initCropper() {
      this.image = this.$refs.image;
      this.cropper = new Cropper(this.image, {
        zoomable: false,
        scalable: false,
        aspectRatio: 1,
        crop: () => {
          const canvas = this.cropper.getCroppedCanvas();
          this.destination = canvas.toDataURL("image/png");
        }
      });
    },
    SaveCropImg() {
      let canvas = this.cropper.getCroppedCanvas();
      this.destination = canvas.toDataURL("image/png");
      const data = {};
      data["image"] = this.destination
      this.saveProfilePic(data)
    }
  },
  computed: mapGetters(["allInfo"]),
  updated() {            
    this.image = this.$refs.image;
    this.initCropper();
    console.log('updating...')
  },
  mounted() {
  }
};
</script>

<style scoped>
.img-container {
  width: 300px;
  height: 200px;
}
.img-preview {
  width: 200px;
  height: 200px;
}
.isHidden {
  display: none;
}
</style>