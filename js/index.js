var  tabs=document.getElementById("tabs").getElementsByTagName("li");
var lists=document.getElementById("lists").getElementsByTagName("ul");
for(var i=0;i<tabs.length;i++)
{
    tabs[i].onclick=showlist;
}
function showlist()
{
    for(var i=0;i<tabs.length;i++)
    {
       
        if(tabs[i]==this)
        {
            tabs[i].className="active";
            lists[i].className="clearfix active"
        }
        else
        {
         tabs[i].className="";
         lists[i].className="clearfix"
        }
    }
}
var seckillnav = document.getElementById("seckill-nav");
window.onscroll=function()
{
    var sckolltop=document.documentElement.scrollTop;
    if(sckolltop>=300)
    {
       seckillnav.className="seckill-nav seckill-fix"
    }
    else
    {
        seckillnav.className="seckill-nav";
    }
}