window.addEventListener('load',function(){
    $(function(){
        // 轮播图
        // 首页轮播图
        var swiper = new Swiper('.swiperOne', {
            autoplay:{
                delay: 3000,
                stopOnLastSlide: false,
                disableOnInteraction: false,
            },
            pagination: {
              el: '.swiper-pagination',
            },
          });
        // 产品轮播图
        var swiper = new Swiper('.swiperTwo', {
            autoplay:{
                delay: 3000,
                stopOnLastSlide: false,
                disableOnInteraction: true,
            },
            slidesPerView: 3,
            scrollbar: {
                el: '.swiper-scrollbar',
                dragSize: 130,
              },
            centeredSlides: true,
            
            on: {
                // 滑到下一页之前回调
                slideChangeTransitionStart: function(){ },
                // 滑到下一页值后回调
                // 滑到当前页就给那页添加样式
                slideChangeTransitionEnd: function(){
                if(this.activeIndex == 0){
                    $('.swiperTwo .swiper-wrapper>.swiper-slide').css('box-shadow','none')
                    $('.swiperTwo .swiper-wrapper>.swiper-slide:eq(0)').css('box-shadow','0px -0px 17px 15px  #063e75')
                   
                }else if(this.activeIndex == 1){
                    $('.swiperTwo .swiper-wrapper>.swiper-slide').css('box-shadow','none')
                    $('.swiperTwo .swiper-wrapper>.swiper-slide:eq(1)').css('box-shadow','0px -0px 17px 15px  #063e75')
                }else if(this.activeIndex == 2){
                    $('.swiperTwo .swiper-wrapper>.swiper-slide').css('box-shadow','none')
                    $('.swiperTwo .swiper-wrapper>.swiper-slide:eq(2)').css('box-shadow','0px -0px 17px 15px  #063e75')
                }else if(this.activeIndex == 3){
                    $('.swiperTwo .swiper-wrapper>.swiper-slide').css('box-shadow','none')
                    $('.swiperTwo .swiper-wrapper>.swiper-slide:eq(3)').css('box-shadow','0px -0px 17px 15px  #063e75')
                }else if(this.activeIndex == 4){
                    $('.swiperTwo .swiper-wrapper>.swiper-slide').css('box-shadow','none')
                    $('.swiperTwo .swiper-wrapper>.swiper-slide:eq(4)').css('box-shadow','0px -0px 17px 15px  #063e75')
                }
                },
              },
          });
          swiper.scrollbar.$dragEl.css('background','#1F8CF2');
          // 轮播图end
          // 隐藏第一页动画
          $('#titleAiom0').hide()
          $('#Cpswipers').hide()
          $('#CpseeMoer').hide()
          //隐藏第二页动画初始状态
          $('#titleAiom').hide()
          $('.contentProject>ul>li:eq(0)').hide()
          $('.contentProject>ul>li:eq(1)').hide()
          $('.contentProject>ul>li:eq(2)').hide()
          $('.contentProject>ul>li:eq(3)').hide()
          //隐藏第三页动画初始状态
          $('#titleAiom1').hide()
          $('#titleAiom2').hide()
          $('.text').hide()
          $('.companyAdvantages').hide()
          $('#seeMoerYy').hide()
          //隐藏第四页初始状态
          $('#titleAiom3').hide()
          $('.newsLeft').hide()
          $('.newsRight>ul>li:eq(0)').hide()
          $('.newsRight>ul>li:eq(1)').hide()
          $('.newsRight>ul>li:eq(2)').hide()
          $('.newsRight>ul>li:eq(3)').hide()
          $('#seeMoerNew').hide()
          
    })
})
