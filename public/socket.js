const socket = io.connect("http://localhost:5000");
socket.on("server-ping", function (data) {
  $(document).ready(function () {
    $(document).ready(function () {
      console.log("ready!");
    });
    // const container = document.getElementById("profile_content");
    // console.log("container", container);
    // container.innerHTML =
    //   container.innerHTML +
    //   '<h4><span style="color:red">Server say => </span> ' +
    //   data.message +
    //   " </h4>";
  });
});
