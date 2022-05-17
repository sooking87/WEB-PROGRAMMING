<!DOCTYPE html>
<html>

<head>
    <title>회원가입</title>
    <meta charset="utf-8">
</head>

<body>
    <?php
            $email = $_GET["mymail"];
            $name = $_GET["myname"];

            echo"<p>회원가입 결과</p>";
            echo"<br><span>이메일: ".$email;
            echo"<br><span>이름: ".$name;
        ?>
</body>

</html>