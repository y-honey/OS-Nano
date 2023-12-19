nano.hello();

print("Hello from an app stored in the filesystem!");

astronaut.unpack();

var counter = Paragraph() ();
var timestamp = Paragraph() ();
var i = 0;

var screen = Screen(true) (
    Container (
        Paragraph() ("Hello, world!"),
        Paragraph() ("This is a test of Astronaut in LiveG OS Nano."),
        counter,
        timestamp
    ),
    Paragraph() ("As you can see, it works very similarly to Adapt UI's Astronaut, but it's running on a small device!"),
    Paragraph() ("How cool is that?!")
);

astronaut.render(screen);

screen.print();

setInterval(function() {
    counter.setText("Count: " + i);

    i++;
}, 1000);

setInterval(function() {
    timestamp.setText("Date.now(): " + Date.now());
});