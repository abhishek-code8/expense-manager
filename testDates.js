dateList = ['2021/02/22','2021/02/12','2021/01/27','2021/02/26'];
mm = [1,2,3,4,5,6,7,8,9];
list = dateList[0].split('/');
//console.log(list);
//console.log(new Date(list[0],list[]))

newList = dateList.sort(function(a,b){
    return new Date(b) - new Date(a);
})


newmm = mm.map((ele)=>{
    ele=ele+1;
})



console.log(newmm);