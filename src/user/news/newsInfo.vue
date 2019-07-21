<template>
    <div class="newsCont">
        <h3 class="title">{{ newsRes.title }}</h3>

        <p class="subtitle">
            <span>发表时间：{{ newsRes.add_time | dateFormat }} </span>
            <span>点击 {{ newsRes.click }} 次</span>
        </p>

        <hr>

        <div v-html="newsRes.content">
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
            id: this.$route.params.id,
            newsRes: []
        }
    },
    created() {
        this.getInfo()
    },
    methods: {
        getInfo() {
            axios.get("/api/getnew/" + this.id).then(res => {
                console.log(res)
                if(res.data.status == 0) {
                    this.newsRes = res.data.message[0]
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
    .newsCont {
        padding: 10px;
    }
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
