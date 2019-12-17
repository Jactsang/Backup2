<template>
  <div>
    <qrcode :value="qrcodeContent" :options="{ width: 200 }"></qrcode>
    <div class="switch-box">
  <input id="switch-me" type="checkbox" :checked="isCheckedIn">
  <label for="switch-me" class="option">
    <span class="active-state">Check-In</span>
    <div class="icon"><i class="fas fa-check-circle"></i>{{ checkedMessage }}</div>
    <span class="inactive-state">Gate Pass</span>
  </label>
</div>
  </div>
</template>

<script>
export default {
  name: "QRcode",
  data() {
    return {
      qrcodeContent: "TestTest",
      isCheckedIn: false,
      checkedMessage: "Gate Pass"
    }
  },
  updated(){
    if(this.isCheckedIn){
      this.checkedMessage = "Gate Pass"
    }else{
      this.checkedMessage = "Check-In"
    }
  },
  created(){
    if(this.isCheckedIn){
      this.checkedMessage = "Gate Pass"
    }else{
      this.checkedMessage = "Check-In"
    }
  }
};
</script>

<style lang="less">

.switch-box {
  position: relative;
  overflow: hidden;
  text-align: left;
  margin: 3% auto;
  width: 250px;
  height: 45px;
  padding: 5px;
  background: #0354a5;
  border: solid 1px #0354a5;
  border-radius: 3px;
  font-size: 1rem;
  font-weight: bold;

	input {
		position: absolute;
		left: -9999em;
	}

	.option {
    pointer-events: none;
    cursor: pointer;
    display: block;
    background: none;
    position: relative;
    padding: 0;
    min-height: 0;
    width: 400px;
    left: -107px;
    transition: all ease-in-out 0.5s;
	}

	.active-state, .inactive-state {
		// text-transform: uppercase;
		padding: 0px 20px;
		font-family: Arial;
		vertical-align: middle;
		font-size: 15px;
		display: inline-block;
	}
  
  .active-state{
    padding-right: 25px;
    color: #0366CB;
  }

  .inactive-state {
    padding-left: 25px;
    color: #0366CB;
  }

	.icon {
		vertical-align: middle;
		width: 123px;
		height: 33px;
		background: #ffffff;
		border-radius: 3px;
		display: inline-block;
    transition: all ease-in-out 0.5s;
    text-align: center;
    color: #0366CB;
    padding: 1.5%;
  }

  .icon .fa-check-circle{
  margin-right: 2%;
  color: #0366CB;
}

	input:checked ~ .option {
		left: 0;
		.icon {
      background: #ffffff;
      width: 130px;
		}
	}
}

// .passIcon{
//   width: 15%;
//   margin-top: 5%;
// }




</style>