<template>
    <div>
        
        <ul class="mui-table-view">
			<li class="mui-table-view-cell mui-media" v-for="item in newslist" :key="item.id">
				<router-link :to="'/home/newsInfo/' + item.id">
					<img class="mui-media-object mui-pull-left" :src=" item.img_url ">
					<div class="mui-media-body">
						<h4> {{ item.title }} </h4>
                            <p class="mui-ellipsis bottom-info">
                                <span>发表日期：{{ item.add_time | dateFormat }} </span>
                                <span>点击 {{ item.click }}次 </span>
                            </p>
						
					</div>
				</router-link>
			</li>
        </ul>

    </div>
</template>

<script>
import axios from 'axios'
axios.defaults.baseURL = 'http://www.liulongbin.top:3005'


export default {
    data() {
        return {
            newslist: []
        }
    },
    created() {
        this.getNewsList()
    },
    methods: {
        getNewsList() {
            axios.get('/api/getnewslist').then(res => {
                console.log(res)
                
                if(res.data.status == 0) {
                    this.newslist = res.data.message
                }
            })
        }
    }
}
</script>

<style scoped>
    .mui-h4, h4 {
        font-size: 14px;
    }
    .mui-table-view-cell p {
        font-size: 12px;
        color: blueviolet;
        display: flex;
        justify-content: space-between;
    }
</style>

