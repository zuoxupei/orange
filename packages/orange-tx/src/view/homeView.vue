<script lang="tsx">
import { CreateElement } from 'vue'; 
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class HomeChildView extends Vue {
  public render(h:CreateElement) {
    return (<div>1232</div>);
  }
} 
</script>