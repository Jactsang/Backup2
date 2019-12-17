<template>
  <div>
    <vs-row vs-w="12" type="flex" vs-justify="center" vs-align="center">
      <vs-col vs-lg="2">
        <img :src="destination" class="img-preview" />
      </vs-col>
      <vs-col vs-lg="2">
        <div class="img-container">
          <img ref="image" :src="source" crossorigin />
        </div>
      </vs-col>
    </vs-row>
    <vs-row>
      <vs-col>
        <input style="display:none" type="file" @change="onFileSelected" ref="fileInput" />
        <button @click="$refs.fileInput.click()">Pick Your Image</button>
      </vs-col>
    </vs-row>
  </div>
</template>

<script>
import Cropper from "cropperjs";

export default {
  name: "ImageCropper",
  data() {
    return {
      cropper: {},
      destination: {},
      image: {},
      source: null
    };
  },
  methods: {
    onFileSelected(event) {
    this.source = URL.createObjectURL(event.target.files[0])
    this.cropper = new Cropper(this.$refs.image, {
      zoomable: true,
      scalable: true,
      aspectRatio: 1,
      crop: () => {
        const canvas = this.cropper.getCroppedCanvas();
        this.destination = canvas.toDataURL("image/png");
      }
    });
    }
  },
  mounted() {
  }
};
</script>

<style scoped>
.img-container {
  max-width: 200px;
  height: 200px;
}
.img-preview {
  width: 200px;
  height: 200px;
  float: left;
  margin-left: 10px;
  border-radius: 50%;
}
</style>