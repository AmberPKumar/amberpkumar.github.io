new Vue({
  el: '#app',
  data: {
    currentFaceIndex: 0,
    isRolling: false,
    faces: ['fast fashion', 'u didnt text back', 'i miss u', 'long drives', 'has not eaten', 'forced to eat', 'dogs r cute', 'code is broken', 'am stress :-(', 'errands to run', 'AI crashed', 'do not ask her', 'ppl r dumb', 'starwars sux now', '2 many texts', 'ask her lmao', 'left on read', 'CA is too hot', 'rejected by job', 'she poor']
  },
  computed: {
    currentFace: function currentFace() {
      return this.faces[this.currentFaceIndex];
    }
  },
  methods: {
    roll: function roll() {
      var _this = this;

      if (this.isRolling) return;
      this.currentFaceIndex = Math.floor(Math.random() * this.faces.length);
      this.isRolling = true;
      setTimeout(function () {
        _this.isRolling = false;
      }, 3000);
    }
  }
});
