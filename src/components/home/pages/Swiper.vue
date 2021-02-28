<template>
    <div class="header-swiper">
        <swiper :options="swiperOptions">
        <swiper-slide v-for='item in swiperList' :key="item.id">
            <img :src="item.imgUrl">
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
    </div>
</template>
<script>
export default {
    data () {
        return {
            swiperList:[
                {
                    id: "01",
                    imgUrl: require("@/assets/img/swiper1.jpg")
                },
                {
                    id: "02",
                    imgUrl: require("@/assets/img/swiper2.jpg")
                }
            ],
            swiperOptions: {
                loop: true,
                autoplay: true,
                speed: 1000,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true
                },
            }
    }
  }
}
</script>
<style type="text/css" scoped lang='stylus'>
.header-swiper {
    background: #ccc;
    height:0;
    padding-bottom: 26.67%;
}
.header-swiper img{
    width: 100%;
    height: 100%;
}
.header-swiper >>> .swiper-pagination-bullet-active{
    background : #fff;
}
</style>>

</style>