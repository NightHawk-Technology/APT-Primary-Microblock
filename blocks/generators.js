Blockly.JavaScript['initialize'] = function(block) {
Blockly.JavaScript.definitions_['include']['Wire'] = '#include <Wire.h>';
Blockly.JavaScript.definitions_['include']['POP32'] = '#include <POP32.h>';
Blockly.JavaScript.definitions_['include']['MPU6050'] = '#include <MPU6050_light.h>';
Blockly.JavaScript.definitions_['include']['QuickPID'] = '#include <QuickPID.h>';
Blockly.JavaScript.definitions_['define']['value'] = `
float currentAngle = 0.0;  // องศาปัจจุบัน
float TurnOutput = 0.0;    // ค่าที่จะส่งไปยังมอเตอร์
float turnSetpoint = 0.0;  // องศาที่ต้องการ

MPU6050 mpu(Wire);
QuickPID turnPID(&currentAngle, &TurnOutput, &turnSetpoint);`;
  var code = `initialize();\n`;
  return code;
};

Blockly.JavaScript['lineThreshold'] = function(block) {
  const number_value = block.getFieldValue('value');
  Blockly.JavaScript.definitions_['define']['lineThreshold'] = `int lineThreshold = ${number_value};`;
  var code = ``;
  return code;
};

Blockly.JavaScript['gyroSpin'] = function(block) {
  const number_degree = block.getFieldValue('degree');
  const number_speed = block.getFieldValue('speed');
  var code = `gyroSpin(${number_degree}, ${number_speed});\n`;
  return code;
};

Blockly.JavaScript['gyroTurn'] = function(block) {
  const number_degree = block.getFieldValue('degree');
  const number_speed = block.getFieldValue('speed');
  var code = `gyroTurn(${number_degree}, ${number_speed});\n`;
  return code;
};

Blockly.JavaScript['gyroMove'] = function(block) {
  const dropdown_direction = block.getFieldValue('direction');
  const number_step = block.getFieldValue('step');
  const number_speed = block.getFieldValue('speed');
  var code = ``;
  if(dropdown_direction == "f"){
    code = `gyroFD(${number_step}, ${number_speed});\n`;
  }
  else if(dropdown_direction == "b"){
    code = `gyroBK(${number_step}, ${number_speed});\n`;
  }
  return code;
}

Blockly.JavaScript['intersection_turn'] = function(block) {
  const dropdown_turn = block.getFieldValue('direction');
  const number_speed = block.getFieldValue('speed');
  var code = `intersec('${dropdown_turn}', ${number_speed});\n`;
  return code;
}

Blockly.JavaScript['shape_move'] = function(block) {
  const dropdown_shape = block.getFieldValue('shape');
  const number_speed = block.getFieldValue('speed');
  var code = `shape('${dropdown_shape}', ${number_speed});\n`;
  return code;
}

Blockly.JavaScript['pass'] = function(block) {
  const number_speed = block.getFieldValue('speed');
  var code = `pass(${number_speed});\n`;
  return code;
};

Blockly.JavaScript['fline'] = function(block) {
  const number_speed = block.getFieldValue('speed');
  const number_diff = block.getFieldValue('difference');
  var code = `fline(${number_speed}, ${number_diff});\n`;
  return code;
};

Blockly.JavaScript['bline'] = function(block) {
  const number_speed = block.getFieldValue('speed');
  var code = `bline(${number_speed});\n`;
  return code;
}