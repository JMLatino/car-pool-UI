
import { mapGetters } from 'vuex'
// import axios from 'axios'
export default {
  data () {
    return {
    }
  },
  created() {
  },
  methods: {
   
    },  
    components: {
    },
    computed: {
        ...mapGetters([
            'userId',
            'vehicles'
        ])
    }
}