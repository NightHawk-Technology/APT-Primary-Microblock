({
    name: "APT Primary", // Category Name
    description: "",
    author: "NightHawk Robotics",
    category: "Controller",
    version: "0.0.2",
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
        "sensor_check",
        "knob",
        "mpuUpdate",
        "getGyro",
        "getAngle",
        "getAccel",
        "waitSW_OK_bmp",
        "waitSW_A_bmp",
        "waitSW_B_bmp",
        // "waitAny_bmp",
    ],
    supportArduinoPlatform: true,
    depends: []
});
