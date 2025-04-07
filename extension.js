({
    name: "APT Primary", // Category Name
    description: "",
    author: "NightHawk Robotics",
    category: "Controller",
    version: "0.0.1",
    icon: "/static/icon.png", // Category icon
    color: "#E74C3C", // Category color (recommend some blocks color)
    blocks: [ // Blocks in Category
        "initialize",
        "lineThreshold",
        "fline",
        "bline",
        "pass",
        "gyroSpin",
        "gyroTurn",
        "gyroMove",
        "intersection_turn",
        "shape_move",
    ],
    supportArduinoPlatform: true,
    depends: []
});
