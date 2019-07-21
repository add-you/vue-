<template>
    <div>
        <h3 class="title">{{ newsRes.title }}</h3>

        <p class="subtitle">
            <span>发表时间：{{ newsRes.add_time | dateFormat }} </span>
            <span>点击 {{ newsRes.click }} 次</span>
        </p>

        <hr>
        <div v-html="newsRes.content"></div>


        <!-- 缩略图 -->
        <div>
            <vue-preview :slides="imgs"></vue-preview>
        </div>


        <my-comments :id="id"></my-comments>
    </div>
</template>

<script>

import axios from 'axios'
import comments from '../subCom/comments.vue'

export default {
    data() {
        return {
            newsRes: [],
            id: this.$route.params.id,
            imgs: []
        }
    },
    created() {
        this.getPic()
        this.getImg()
    },
    methods: {
        getPic() {
            axios.get("api/getimageInfo/" + this.id).then(res => {
                console.log(res)
                if(res.data.status == 0) {
                    this.newsRes = res.data.message[0]
                }
            })
        },
        getImg() {
            axios.get('api/getthumimages/' + this.id).then(res => {
                console.log(res)
                if(res.data.status == 0) {
                    this.imgs = res.data.message
                    this.imgs.forEach(item => {
                        item.w = 600
                        item.h = 400
                        item.msrc = item.src
                    })
                }
            })
        }
    },
        components: {
            "my-comments": comments
        }
}
</script>


<style scoped>
    .title {
        font-size: 16px;
        text-align: center;
        padding: 10px 0;
        color: blueviolet;
    }
    .subtitle {
        display: flex;
        justify-content: space-between;
    }
</style>
