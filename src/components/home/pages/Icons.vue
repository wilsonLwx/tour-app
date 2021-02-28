<template>
  <div id='icons'>
    <swiper :options="swiperOptions">
        <swiper-slide v-for="item in page" :key="item.id">
            <div class='icons-item' v-for="eachItem in item" :key="eachItem.id">
                <img :src="eachItem.imgUrl"> 
                <p>{{eachItem.title}}</p>
            </div>
    </swiper-slide>
    </swiper>
  </div>
</template>

<script>
export default {
    data () {
        return {
            swiperOptions: {  
            },
            iconsList: [
                {
                    id: '01',
                    imgUrl: "http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png",
                    title: "景点门票"
                },
                {
                    id: '02',
                    imgUrl: "http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png",
                    title: "景点门票"
                },
                {
                    id: '03',
                    imgUrl: "http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png",
                    title: "景点门票"
                    },
                {
                    id: '04',
                    imgUrl: "http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png",
                    title: "景点门票"
                    },
                {
                    id: '05',
                    imgUrl: "http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png",
                    title: "景点门票"
                    },
                {
                    id: '06',
                    imgUrl: "http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png",
                    title: "景点门票"
                    },
                {
                    id: '07',
                    imgUrl: "http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png",
                    title: "景点门票"
                    },
                {
                    id: '08',
                    imgUrl: "http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png",
                    title: "景点门票"
                    },
                {
                    id: '09',
                    imgUrl: "http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png",
                    title: "景点门票"
                    },
                {
                    id: '10',
                    imgUrl: "http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png",
                    title: "景点门票"
                    }
            ],
        }
    },
    computed : {
        page () {
            let pages = [];
            this.iconsList.forEach((item, index) => {
                let idx = Math.floor(index/8);
                if(!pages[idx]) pages[idx] = [];
                pages[idx].push(item)
            })
            console.log(pages)
            return pages
        }
    }

}
</script>

<style scoped lang='stylus'>
@import '~@/assets/css/common.styl'

.icons{
    width: 100%;
    overflow: hidden;
}

.icons-item{
    width: 25%;
    padding-bottom: 25%;
    height: 0;
    float: left;
    background: #fff;
}

.icons-item img {
    width: 1.1rem;
    height: 1.1rem;
    display: block;
    margin: 0 auto;
    padding-top: .2rem;
}

.icons-item p {
    margin-top: .1rem;
    font-size: .28rem;
    text-align: center;
    color: #212121;   
    textOverflow();
}

</style>