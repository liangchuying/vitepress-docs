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