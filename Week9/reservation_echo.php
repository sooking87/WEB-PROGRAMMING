<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>php 시작하기</title>
</head>

<body>
    <?php
         $user = $_GET["userName"]; // 예약자
         $phoneNumber = $_GET["phoneNumber"]; // 연락처
         $num = $_GET["num"]; // 예약인원
         $date = $_GET["date"]; // 예약날짜
         $time = $_GET["time"]; // 예약시간
         $course = $_GET["course"];
         $request = $_GET["request"]; // 요청사항

         echo "<span>예약이 완료되었습니다.</span>";
         echo "<br><br><span>예약자: ".$user;
         echo "<br><span>연락처: ".$phoneNumber;
         echo "<br><span>예약인원: ".$num;
         echo "<br><span>예약날짜: ".$date;
         echo "<br><span>예약시간: ".$time;
         echo "<br><span>메뉴: ".$course;
         echo "<br><span>요청사항: ".$request;
    ?>
</body>

</html>