function addScheduleModal(){
    let e = document.getElementById("collection");
    let collection = e.options[e.selectedIndex].value;
    let startdate = document.getElementById("startdate").value;
    let enddate = document.getElementById("enddate").value;
    let starttime = document.getElementById("starttime").value;
    let endtime = document.getElementById("endtime").value;
    let title = document.getElementById("title").value;
    let layer = document.getElementById("layer").value;

    //나중에 사용자가 지정한 지역의 시간이 들어가도록 해야한다. 일단 한국시간(KST)으로 설정해둠.(UTC기준 +09:00)
    let start = startdate + "T" + starttime + ":00+09:00";
    let end = enddate + "T" + endtime + ":00+09:00";
    $.ajax({
        url:"/api/schedule",
        type: "post",
        data:{
            collection: collection,
            title: title,
            start: start,
            end: end,
            color: "#f5ce42",
            layer: layer,
            hidden: "false"
        },
        dataType: "json",
        success: function(data){
            //추후 해당 스케쥴 렌더링
            //지금은 알림창 정도
            console.log("success");
            alert("success!");
            clearSelection();
        },
        error: function(request,status,error){
            alert("code:"+request.status+"\n"+"status:"+status+"\n"+"msg:"+request.responseText+"\n"+"error:"+error);
            clearSelection();
        }
    });
}