#### AppBar 封装
```tex
class AppBars extends StatelessWidget implements PreferredSizeWidget {
  const AppBars({
    super.key,
    required this.title,
    this.actions,
  });

  final String title;
  final List<Widget>? actions;

  @override
  PreferredSizeWidget build(BuildContext context) {
    return AppBar(
      scrolledUnderElevation: 0.0,
      title: AppBarTitle(title: title),
      automaticallyImplyLeading: false,
      backgroundColor: AppColors.white,
      leading: const BackIconButton(),
      actions: actions,
      centerTitle: true,
    );
  }

  @override
  Size get preferredSize => const Size.fromHeight(kToolbarHeight);
}
```