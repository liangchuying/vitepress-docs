#### flutter login 模板

```dart
import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:styled_widget/styled_widget.dart';

class Login extends StatefulWidget {
  const Login({super.key});

  @override
  State<Login> createState() => _LoginState();
}

class _LoginState extends State<Login> {
  final TextEditingController EmailController = TextEditingController();
  final TextEditingController PasswordController = TextEditingController();
  @override
  Widget build(BuildContext context) {
    return Scaffold(
        body: [
      Text("MyApp Title")
          .textStyle(TextStyle(color: Colors.black))
          .fontSize(28.0)
          .fontWeight(FontWeight.bold),
      Text("Login to You App")
          .textStyle(TextStyle(color: Colors.black))
          .fontSize(44.0)
          .fontWeight(FontWeight.bold),
      SizedBox(
        height: 44,
      ),
      TextFormField(
        controller: EmailController,
        keyboardType: TextInputType.emailAddress,
        decoration: InputDecoration(
            hintText: "User Email",
            prefixIcon: Icon(
              Icons.mail,
              color: Colors.black,
            )),
      ),
      SizedBox(
        height: 26,
      ),
      TextFormField(
        controller: PasswordController,
        keyboardType: TextInputType.emailAddress,
        decoration: InputDecoration(
            hintText: "User Password",
            prefixIcon: Icon(
              Icons.lock,
              color: Colors.black,
            )),
      ),
      SizedBox(
        height: 12,
      ),
      Text("Don't Remenber you Password?")
          .textStyle(TextStyle(color: Colors.blue)),
      SizedBox(
        height: 88,
      ),
      Container(
        width: double.infinity,
        child: RawMaterialButton(
            onPressed: () {
              print(EmailController.text);
              print(PasswordController.text);
              print("登录成功");
            },
            fillColor: Color(0xFF0069FE),
            elevation: 0.0,
            padding: EdgeInsets.symmetric(vertical: 12.0),
            shape: RoundedRectangleBorder(
                borderRadius: BorderRadius.circular(5.0)),
            child: Text("Login").textStyle(TextStyle(color: Colors.white))),
      )
    ]
            .toColumn(
                mainAxisAlignment: MainAxisAlignment.center,
                crossAxisAlignment: CrossAxisAlignment.start)
            .padding(all: 16.0).safeArea().scrollable()
    );
  }
}
```

```dart
import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:luid_flutter/app/config/defaultColors.dart';
import 'package:styled_widget/styled_widget.dart';

class Login extends StatefulWidget {
  const Login({super.key});

  @override
  State<Login> createState() => _LoginState();
}

class _LoginState extends State<Login> {
  static final defaultColor = Colors.deepPurple;
  Size mediaSize = Get.mediaQuery.size;
  bool rememberUser = false;

  @override
  Widget build(BuildContext context) {
    return Container(
      decoration: BoxDecoration(
        color: defaultColor,
        image: DecorationImage(
            image: AssetImage("assets/images/travel/gondola.jpg"),
            fit: BoxFit.cover,
            colorFilter: ColorFilter.mode(
                defaultColor.withOpacity(0.2), BlendMode.dstATop)),
      ),
      child: Scaffold(
        backgroundColor: Colors.transparent,
        body: Stack(
          children: [
            Positioned(
              child: _buildTop(),
              top: 80,
            ),
            Positioned(
              child: _buildBottom(),
              bottom: 0,
            )
          ],
        ),
      ),
    );
  }

  Widget _buildTop() {
    return SizedBox(
      width: mediaSize.width,
      child: [
        Icon(
          Icons.location_on_sharp,
          size: 100,
          color: Colors.white,
        ),
        Text("GO MAP")
            .fontSize(40)
            .fontWeight(FontWeight.bold)
            .letterSpacing(2)
            .textStyle(TextStyle(color: Colors.white)),
      ].toColumn(mainAxisSize: MainAxisSize.min),
    );
  }

  Widget _buildBottom() {
    return SizedBox(
      width: mediaSize.width,
      child: Card(
        shape: RoundedRectangleBorder(
            borderRadius: BorderRadius.only(
                topLeft: Radius.circular(30), topRight: Radius.circular(30))),
        child: _buildForm(),
      ),
    );
  }

  Widget _buildForm() {
    return [
      Text("welcome")
          .fontSize(32)
          .textStyle(TextStyle(color: defaultColor))
          .fontWeight(FontWeight.w500),
      _buildGreyText("Please login with your information"),
      SizedBox(height: 60),
      _buildGreyText("Email address"),
      _buildInputField(),
      SizedBox(height: 40),
      _buildGreyText("Password"),
      _buildInputField(isPassword: true),
      _buildRememberForgot(),
      SizedBox(
        height: 20,
      ),
      _buildLoginButton(),
      SizedBox(
        height: 20,
      ),
      _buildOterLogin(),
    ].toColumn(crossAxisAlignment: CrossAxisAlignment.start).padding(all: 30);
  }

  Widget _buildGreyText(String text) {
    return Text(text).textStyle(TextStyle(color: Colors.grey));
  }

  Widget _buildInputField({isPassword = false}) {
    return TextField(
      decoration: InputDecoration(
          hoverColor: defaultColor,
        suffixIcon: isPassword ? Icon(Icons.remove_red_eye) : Icon(Icons.done),
      ),
      obscureText: isPassword,
    );
  }

  Widget _buildRememberForgot() {
    return [
      [
        Checkbox(
            value: rememberUser,
            onChanged: (value) {
              setState(() {
                rememberUser = value!;
              });
            }),
        _buildGreyText("Rmemeber me")
      ].toRow(),
      TextButton(
          onPressed: () {}, child: _buildGreyText("I forgot my password"))
    ].toRow(mainAxisAlignment: MainAxisAlignment.spaceBetween);
  }

  Widget _buildLoginButton() {
    return Container(
      width: Get.width,
      height: 50,
      child: ElevatedButton(
          onPressed: () {
            debugPrint("Email : ");
            debugPrint("Password : ");
          },
          style: ElevatedButton.styleFrom(
              foregroundColor: Colors.white,
              backgroundColor: defaultColor,
              shape: StadiumBorder(),
              elevation: 20,
              shadowColor: defaultColor,
              maximumSize: Size.fromHeight(80),

          ),
          child: Text("LOGIN")),
    );
  }

  Widget _buildOterLogin() {
    return Center(
      child: [
        _buildGreyText("Or Login With"),
        SizedBox(
          height: 10,
        ),
        [
          Tab(
            icon: Image.asset("assets/images/travel/gondola.jpg"),
          ),
          Tab(icon: Image.asset("assets/images/travel/gondola.jpg")),
          Tab(icon: Image.asset("assets/images/travel/gondola.jpg"))
        ].toRow(mainAxisAlignment: MainAxisAlignment.spaceEvenly)
      ].toColumn(),
    );
  }
}

```