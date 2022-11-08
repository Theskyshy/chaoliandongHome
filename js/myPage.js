// <!-- 大屏滚动页面 -->
$(function(){
    $('#dowebok').fullpage({
        // 开启导航栏
        navigation:true,
        // 设置导航栏位置
        navigationPosition:'left' ,
        // 滚到某一页之后的回调
        // index页数从1开始计数
        afterLoad(anchorLink,index){
            if(index == 2){
                $('#titleAiom0').show().addClass('slide-in-left')
                $('#Cpswipers').show().addClass('scale-in-center')
                $('#CpseeMoer').show().addClass('slide-in-top')
            }else if(index == 3){
                $('#titleAiom').show().addClass('slide-in-left')
                $('.contentProject>ul>li:eq(0)').show().addClass('slide-in-tops')
                $('.contentProject>ul>li:eq(2)').show().addClass('slide-in-tops')
                $('.contentProject>ul>li:eq(1)').show().addClass('slide-in-bottoms')
                $('.contentProject>ul>li:eq(3)').show().addClass('slide-in-bottoms')    
            }else if(index == 4){
                $('#titleAiom1').show().addClass('slide-in-left')
                $('#titleAiom2').show().addClass('slide-in-left4')
                $('.text').show().addClass('slide-in-left3')
                $('.companyAdvantages').show().addClass('slide-in-left5')
                // 圆
                $('.circular').addClass('rotate-scale-up')
                $('.circular').addClass('rotate-scale-up')
                $('.circular>ul>li').addClass('shake-horizontal')
                $('#seeMoerYy').show().addClass('slide-in-tops')
            }else if(index == 5){
                $('#titleAiom3').show().addClass('slide-in-left')
                $('.newsLeft').show().addClass('scale-in-center')
                $('.newsRight>ul>li:eq(0)').show().addClass('slide-in-right')
                $('.newsRight>ul>li:eq(1)').show().addClass('slide-in-right1')
                $('.newsRight>ul>li:eq(2)').show().addClass('slide-in-right3')
                $('.newsRight>ul>li:eq(3)').show().addClass('slide-in-right6')
                $('#seeMoerNew').show().addClass('slide-in-tops')
            }
        }
    });
    


});