/**
 * Created by Shawn on 10/4/2014.
 */
class FooBar {
  private fullName = "Shawn Wildermuth";
  showMe() {
    console.log(this.fullName);
  }
}

var foo = new FooBar();
foo.showMe();
