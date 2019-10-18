<script lang="tsx">
import { CreateElement } from 'vue'; 
import { Vue, Component } from 'vue-property-decorator';
import HomeChildView from './homeView.vue';
import * as home from './homeChild';

@Component({
  components:{
    HomeChildView
  }
})
export default class Home extends Vue {

  mounted() {
    console.log('12312');
  }
  render(h:CreateElement){

    return (<div class='home-box'>左绪培<HomeChildView/>{home.homeChild(h)}</div>);
  }
}
</script>

<style lang="less" scoped>
.home-box {
  font-size: 14px;
}
</style>