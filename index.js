Blockly.JavaScript['title'] = function (block) {
  var value_name = Blockly.JavaScript.valueToCode(
    block,
    'NAME',
    Blockly.JavaScript.ORDER_ATOMIC
  );
  // TODO: Assemble JavaScript into code variable.

  const first = this.getFieldValue('NAME');
  var code = '"title": "' + first + '",\n';
  return code;
};

Blockly.JavaScript['type'] = function (block) {
  var value_name = Blockly.JavaScript.valueToCode(
    block,
    'NAME',
    Blockly.JavaScript.ORDER_ATOMIC
  );
  // TODO: Assemble JavaScript into code variable.

  const first = this.getFieldValue('NAME');
  var code = '"type": "' + first + '",\n';
  return code;
};

Blockly.JavaScript['descriptioncomma'] = function (block) {
  var value_name = Blockly.JavaScript.valueToCode(
    block,
    'NAME',
    Blockly.JavaScript.ORDER_ATOMIC
  );
  // TODO: Assemble JavaScript into code variable.

  const first = this.getFieldValue('NAME');
  var code = '"description": "' + first + '",\n';
  return code;
};

Blockly.JavaScript['description'] = function (block) {
  var value_name = Blockly.JavaScript.valueToCode(
    block,
    'NAME',
    Blockly.JavaScript.ORDER_ATOMIC
  );
  // TODO: Assemble JavaScript into code variable.

  const first = this.getFieldValue('NAME');
  var code = '"description": "' + first + '"\n';
  return code;
};
Blockly.JavaScript['minlength'] = function (block) {
  var value_name = Blockly.JavaScript.valueToCode(
    block,
    'NAME',
    Blockly.JavaScript.ORDER_ATOMIC
  );
  // TODO: Assemble JavaScript into code variable.

  const first = this.getFieldValue('NAME');
  var code = '"minLength": ' + first + ',\n';
  return code;
};
Blockly.JavaScript['minimum'] = function (block) {
  var value_name = Blockly.JavaScript.valueToCode(
    block,
    'NAME',
    Blockly.JavaScript.ORDER_ATOMIC
  );
  // TODO: Assemble JavaScript into code variable.

  const first = this.getFieldValue('NAME');
  var code = '"minimum": ' + first + '\n';
  return code;
};
Blockly.JavaScript['maximum'] = function (block) {
  var value_name = Blockly.JavaScript.valueToCode(
    block,
    'NAME',
    Blockly.JavaScript.ORDER_ATOMIC
  );
  // TODO: Assemble JavaScript into code variable.

  const first = this.getFieldValue('NAME');
  var code = '"maximum": ' + first + ',\n';
  return code;
};

Blockly.JavaScript['Console'] = function (block) {
  var statements_properties = Blockly.JavaScript.statementToCode(
    block,
    'properties'
  );
  // TODO: Assemble JavaScript into code variable.
  var code = '"Console": {' + statements_properties + '},\n';
  return code;
};
Blockly.JavaScript['ReturnCodes'] = function (block) {
  var statements_properties = Blockly.JavaScript.statementToCode(
    block,
    'properties'
  );
  // TODO: Assemble JavaScript into code variable.
  var code = '"ReturnCodes": {' + statements_properties + '},\n';
  return code;
};
Blockly.JavaScript['References'] = function (block) {
  var statements_properties = Blockly.JavaScript.statementToCode(
    block,
    'properties'
  );
  // TODO: Assemble JavaScript into code variable.
  var code = '"References": {' + statements_properties + '},\n';
  return code;
};

Blockly.JavaScript['Resolution'] = function (block) {
  var statements_properties = Blockly.JavaScript.statementToCode(
    block,
    'properties'
  );
  // TODO: Assemble JavaScript into code variable.
  var code = '"Resolution": {' + statements_properties + '},\n';
  return code;
};
Blockly.JavaScript['properties'] = function (block) {
  var statements_properties = Blockly.JavaScript.statementToCode(
    block,
    'properties'
  );
  // TODO: Assemble JavaScript into code variable.
  var code = '"properties": {' + statements_properties + '}\n';
  return code;
};

Blockly.JavaScript['name'] = function (block) {
  var statements_properties = Blockly.JavaScript.statementToCode(
    block,
    'properties'
  );
  // TODO: Assemble JavaScript into code variable.
  var code = '"Name": {' + statements_properties + '},\n';
  return code;
};
Blockly.JavaScript['desc'] = function (block) {
  var statements_properties = Blockly.JavaScript.statementToCode(
    block,
    'properties'
  );
  // TODO: Assemble JavaScript into code variable.
  var code = '"Description": {' + statements_properties + '},\n';
  return code;
};
Blockly.JavaScript['Logger'] = function (block) {
  var statements_properties = Blockly.JavaScript.statementToCode(
    block,
    'properties'
  );
  // TODO: Assemble JavaScript into code variable.
  var code = '"Logger": {' + statements_properties + '},\n';
  return code;
};
Blockly.JavaScript['Type'] = function (block) {
  var statements_properties = Blockly.JavaScript.statementToCode(
    block,
    'properties'
  );
  // TODO: Assemble JavaScript into code variable.
  var code = '"Type": {' + statements_properties + '},\n';
  return code;
};
Blockly.JavaScript['Plugin'] = function (block) {
  var statements_properties = Blockly.JavaScript.statementToCode(
    block,
    'properties'
  );
  // TODO: Assemble JavaScript into code variable.
  var code = '"Plugin": {' + statements_properties + '},\n';
  return code;
};
Blockly.JavaScript['Plugin-Data'] = function (block) {
  var statements_properties = Blockly.JavaScript.statementToCode(
    block,
    'properties'
  );
  // TODO: Assemble JavaScript into code variable.
  var code = '"Plugin-Data": {' + statements_properties + '}\n';
  return code;
};
Blockly.JavaScript['items'] = function (block) {
  var statements_properties = Blockly.JavaScript.statementToCode(
    block,
    'properties'
  );
  // TODO: Assemble JavaScript into code variable.
  var code = '"items": {' + statements_properties + '}\n';
  return code;
};
Blockly.JavaScript['File-path'] = function (block) {
  var statements_properties = Blockly.JavaScript.statementToCode(
    block,
    'properties'
  );
  // TODO: Assemble JavaScript into code variable.
  var code = '"File-path": {' + statements_properties + '},\n';
  return code;
};
Blockly.JavaScript['Max-log-size'] = function (block) {
  var statements_properties = Blockly.JavaScript.statementToCode(
    block,
    'properties'
  );
  // TODO: Assemble JavaScript into code variable.
  var code = '"Max-log-size": {' + statements_properties + '},\n';
  return code;
};
Blockly.JavaScript['Max-log-files'] = function (block) {
  var statements_properties = Blockly.JavaScript.statementToCode(
    block,
    'properties'
  );
  // TODO: Assemble JavaScript into code variable.
  var code = '"Max-log-files": {' + statements_properties + '}\n';
  return code;
};
Blockly.JavaScript['loggingformat'] = function (block) {
  var statements_properties = Blockly.JavaScript.statementToCode(
    block,
    'properties'
  );
  // TODO: Assemble JavaScript into code variable.
  var code = '"Logging-Format": {' + statements_properties + '},\n';
  return code;
};

Blockly.JavaScript['Order'] = function (block) {
  var statements_properties = Blockly.JavaScript.statementToCode(
    block,
    'properties'
  );
  // TODO: Assemble JavaScript into code variable.
  var code = '"Order": {' + statements_properties + '},\n';
  return code;
};
Blockly.JavaScript['Delimeter'] = function (block) {
  var statements_properties = Blockly.JavaScript.statementToCode(
    block,
    'properties'
  );
  // TODO: Assemble JavaScript into code variable.
  var code = '"Delimeter": {' + statements_properties + '}\n';
  return code;
};
Blockly.JavaScript['Error-Codes'] = function (block) {
  var statements_properties = Blockly.JavaScript.statementToCode(
    block,
    'properties'
  );
  // TODO: Assemble JavaScript into code variable.
  var code = '"Error-Codes": {' + statements_properties + '}\n';
  return code;
};
Blockly.JavaScript['ID'] = function (block) {
  var statements_properties = Blockly.JavaScript.statementToCode(
    block,
    'properties'
  );
  // TODO: Assemble JavaScript into code variable.
  var code = '"ID": {' + statements_properties + '},\n';
  return code;
};
Blockly.JavaScript['Messages'] = function (block) {
  var statements_properties = Blockly.JavaScript.statementToCode(
    block,
    'properties'
  );
  // TODO: Assemble JavaScript into code variable.
  var code = '"Messages": {' + statements_properties + '},\n';
  return code;
};

Blockly.JavaScript['Log'] = function (block) {
  var statements_properties = Blockly.JavaScript.statementToCode(
    block,
    'properties'
  );
  // TODO: Assemble JavaScript into code variable.
  var code = '"log": {' + statements_properties + '}\n';
  return code;
};

Blockly.JavaScript['Severity'] = function (block) {
  var statements_properties = Blockly.JavaScript.statementToCode(
    block,
    'properties'
  );
  // TODO: Assemble JavaScript into code variable.
  var code = '"Severity": {' + statements_properties + '},\n';
  return code;
};
Blockly.JavaScript['Arguments'] = function (block) {
  var statements_properties = Blockly.JavaScript.statementToCode(
    block,
    'properties'
  );
  // TODO: Assemble JavaScript into code variable.
  var code = '"Arguments": {' + statements_properties + '}\n';
  return code;
};
Blockly.JavaScript['Resolution'] = function (block) {
  var statements_properties = Blockly.JavaScript.statementToCode(
    block,
    'properties'
  );
  // TODO: Assemble JavaScript into code variable.
  var code = '"Resolution": {' + statements_properties + '},\n';
  return code;
};
Blockly.JavaScript['Description'] = function (block) {
  var statements_properties = Blockly.JavaScript.statementToCode(
    block,
    'properties'
  );
  // TODO: Assemble JavaScript into code variable.
  var code = '"Description": {' + statements_properties + '},\n';
  return code;
};
Blockly.JavaScript['Owner'] = function (block) {
  var statements_properties = Blockly.JavaScript.statementToCode(
    block,
    'properties'
  );
  // TODO: Assemble JavaScript into code variable.
  var code = '"Owner": {' + statements_properties + '},\n';
  return code;
};
Blockly.JavaScript['SelfHealing'] = function (block) {
  var statements_properties = Blockly.JavaScript.statementToCode(
    block,
    'properties'
  );
  // TODO: Assemble JavaScript into code variable.
  var code = '"SelfHealing": {' + statements_properties + '}\n';
  return code;
};

Blockly.JavaScript['References'] = function (block) {
  var statements_properties = Blockly.JavaScript.statementToCode(
    block,
    'properties'
  );
  // TODO: Assemble JavaScript into code variable.
  var code = '"References": {' + statements_properties + '},\n';
  return code;
};
Blockly.JavaScript['link'] = function (block) {
  var statements_properties = Blockly.JavaScript.statementToCode(
    block,
    'properties'
  );
  // TODO: Assemble JavaScript into code variable.
  var code = '"link":{' + statements_properties + '}\n';
  return code;
};
Blockly.JavaScript['ReturnCodes'] = function (block) {
  var statements_properties = Blockly.JavaScript.statementToCode(
    block,
    'properties'
  );
  // TODO: Assemble JavaScript into code variable.
  var code = '"ReturnCodes":{' + statements_properties + '}\n';
  return code;
};
Blockly.JavaScript['HTTP'] = function (block) {
  var statements_properties = Blockly.JavaScript.statementToCode(
    block,
    'properties'
  );
  // TODO: Assemble JavaScript into code variable.
  var code = '"HTTP": {' + statements_properties + '},\n';
  return code;
};
Blockly.JavaScript['Console'] = function (block) {
  var statements_properties = Blockly.JavaScript.statementToCode(
    block,
    'properties'
  );
  // TODO: Assemble JavaScript into code variable.
  var code = '"Console": {' + statements_properties + '}\n';
  return code;
};
Blockly.JavaScript['Name'] = function (block) {
  var statements_properties = Blockly.JavaScript.statementToCode(
    block,
    'properties'
  );
  // TODO: Assemble JavaScript into code variable.
  var code = '"Name": {' + statements_properties + '},\n';
  return code;
};
Blockly.JavaScript['Description'] = function (block) {
  var statements_properties = Blockly.JavaScript.statementToCode(
    block,
    'properties'
  );
  // TODO: Assemble JavaScript into code variable.
  var code = '"Description": {' + statements_properties + '},\n';
  return code;
};
Blockly.JavaScript['Owner'] = function (block) {
  var statements_properties = Blockly.JavaScript.statementToCode(
    block,
    'properties'
  );
  // TODO: Assemble JavaScript into code variable.
  var code = '"Owner": {' + statements_properties + '},\n';
  return code;
};
Blockly.JavaScript['SelfHealing'] = function (block) {
  var statements_properties = Blockly.JavaScript.statementToCode(
    block,
    'properties'
  );
  // TODO: Assemble JavaScript into code variable.
  var code = '"SelfHealing": {' + statements_properties + '}\n';
  return code;
};
Blockly.JavaScript['start'] = function (block) {
  var statements_properties = Blockly.JavaScript.statementToCode(
    block,
    'properties'
  );
  // TODO: Assemble JavaScript into code variable.
  var code = '{' + statements_properties + '}\n';
  return code;
};

  
Blockly.JavaScript['enumi'] = function(block) {
  var values = [];

  // Check if there are connected blocks of specific types
  var typesToCheck = ['asctime', 'severity', 'id', 'message','req_id','Other','service'];
  for (var i = 0; i < block.inputList.length; i++) {
    var input = block.inputList[i];
    if (input.connection && input.connection.targetBlock() && typesToCheck.includes(input.connection.targetBlock().type)) {
      var code = Blockly.JavaScript[input.connection.targetBlock().type](input.connection.targetBlock())[0];
      values.push(code);
    }
  }

  var code = '"enum": [' + values.join(', ') + ']';
  return code + '\n';
};

Blockly.JavaScript['asctime'] = function(block) {
  var code = '"asctime"';
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['severity'] = function(block) {
  var code = '"severity"';
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['id'] = function(block) {
  var code = '"id"';
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['message'] = function(block) {
  var code = '"message"';
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['service'] = function(block) {
  var code = '"service"';
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};


Blockly.JavaScript['req_id'] = function(block) {
  var code = '"req_id"';
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};


Blockly.JavaScript['Other'] = function(block) {
  var code = '"Other"';
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};


Blockly.JavaScript['enums'] = function(block) {
  var values = [];

  // Check if there are connected blocks of specific types
  var typesToCheck = ['High','Low','Medium'];
  for (var i = 0; i < block.inputList.length; i++) {
    var input = block.inputList[i];
    if (input.connection && input.connection.targetBlock() && typesToCheck.includes(input.connection.targetBlock().type)) {
      var code = Blockly.JavaScript[input.connection.targetBlock().type](input.connection.targetBlock())[0];
      values.push(code);
    }
  }

  var code = '"enum": [' + values.join(', ') + ']';
  return code + '\n';
};

Blockly.JavaScript['High'] = function(block) {
  var code = '"High"';
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['Low'] = function(block) {
  var code = '"Low"';
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['Medium'] = function(block) {
  var code = '"Medium"';
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};



Blockly.JavaScript['enumd'] = function(block) {
  var values = [];

  // Check if there are connected blocks of specific types
  var typesToCheck = ['|','/',' ','Other'];
  for (var i = 0; i < block.inputList.length; i++) {
    var input = block.inputList[i];
    if (input.connection && input.connection.targetBlock() && typesToCheck.includes(input.connection.targetBlock().type)) {
      var code = Blockly.JavaScript[input.connection.targetBlock().type](input.connection.targetBlock())[0];
      values.push(code);
    }
  }

  var code = '"enum": [' + values.join(', ') + ']';
  return code + '\n';
};

Blockly.JavaScript['/'] = function(block) {
  var code = '"/"';
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['|'] = function(block) {
  var code = '"|"';
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript[' '] = function(block) {
  var code = '" "';
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

/*

JavaScript['enumi'] = function(block) {
  // Create a list with any number of elements of any type.
  const elements = new Array(block.itemCount_);
  for (let i = 0; i < block.itemCount_; i++) {
    elements[i] =
        JavaScript.valueToCode(block, 'ADD' + i, JavaScript.ORDER_NONE) ||
        'null';
  }
  const code = '[' + elements.join(', ') + ']';
  return [code, JavaScript.ORDER_ATOMIC];
};


JavaScript['asctime'] = function(block) {
  return ['"asctime"', JavaScript.ORDER_ATOMIC];
};


*/
// Define which blocks are available in the toolbox.
const toolbox = {
  kind: 'categoryToolbox',
  contents: [
    {
      kind: 'category',
      name: 'START',
      contents: [
        {
          kind: 'block',
          type: 'start',
        },
      ],
    },

    {
      kind: 'category',
      name: 'MAIN',
      contents: [
        {
          kind: 'block',
          type: 'title',
        },
        {
          kind: 'block',
          type: 'type',
        },

        {
          kind: 'block',
          type: 'properties',
        },
        

        {
          kind: 'category',
          name: 'Name',
          contents: [
            {
              kind: 'block',
              type: 'name',
            },
            {
              kind: 'block',
              type: 'type',
            },

            {
              kind: 'block',
              type: 'minlength',
            },

            {
              kind: 'block',
              type: 'description',
            },
          ],
        },

        {
          kind: 'category',
          name: 'descripiton',
          contents: [
            {
              kind: 'block',
              type: 'desc',
            },
            {
              kind: 'block',
              type: 'type',
            },

            {
              kind: 'block',
              type: 'minlength',
            },

            {
              kind: 'block',
              type: 'description',
            },
          ],
        },
      ],
    },

    {
      kind: 'category',
      name: 'LOGGER',
      contents: [
        {
          kind: 'block',
          type: 'Logger',
        },
        {
          kind: 'block',
          type: 'type',
        },

        {
          kind: 'block',
          type: 'items',
        },

        {
          kind: 'block',
          type: 'properties',
        },
       
      
        {
          kind: 'category',
          name: 'Type',
          contents: [
            {
              kind: 'block',
              type: 'Type',
            },
            {
              kind: 'block',
              type: 'type',
            },

            {
              kind: 'block',
              type: 'description',
            },
          ],
        },
        {
          kind: 'category',
          name: 'Plugin',
          contents: [
            {
              kind: 'block',
              type: 'Plugin',
            },
            
    
            {
              kind: 'block',
              type: 'type',
            },

            {
              kind: 'block',
              type: 'description',
            },
          ],
        },

        {
          kind: 'category',
          name: 'Plugin-Data',
          contents: [
            {
              kind: 'block',
              type: 'Plugin-Data',
            },
            {
              kind: 'block',
              type: 'type',
            },

            {
              kind: 'block',
              type: 'description',
            },

            {
              kind: 'block',
              type: 'properties',
            },
            

            {
              kind: 'category',
              name: 'File-path',
              contents: [
                {
                  kind: 'block',
                  type: 'File-path',
                },
               
                {
                  kind: 'block',
                  type: 'type',
                },
                {
                  kind: 'block',
                  type: 'description',
                },
              ],
            },
            {
              kind: 'category',
              name: 'Max-log-size',
              contents: [
                {
                  kind: 'block',
                  type: 'Max-log-size',
                },
                
                {
                  kind: 'block',
                  type: 'type',
                },

                {
                  kind: 'block',
                  type: 'descriptioncomma',
                },

                {
                  kind: 'block',
                  type: 'minimum',
                },

                {
                  kind: 'block',
                  type: 'maximum',
                },
              ],
            },
            {
              kind: 'category',
              name: 'Max-log-files',
              contents: [
                {
                  kind: 'block',
                  type: 'Max-log-files',
                },
                {
                  kind: 'block',
                  type: 'type',
                },
                {
                  kind: 'block',
                  type: 'descriptioncomma',
                },
                {
                  kind: 'block',
                  type: 'minimum',
                },
                {
                  kind: 'block',
                  type: 'maximum',
                },
              ],
            },
          ],
        },
      ],
    },
    {
      kind: 'category',
      name: 'LOGGING FORMAT',
      contents: [
        {
          kind: 'block',
          type: 'loggingformat',
        },

        {
          kind: 'block',
          type: 'type',
        },
        {
          kind: 'block',
          type: 'properties',
        },
       
        {
          kind: 'category',
          name: 'Order',
          contents: [
            {
              kind: 'block',
              type: 'Order',
            },
           
            {
              kind: 'block',
              type: 'type',
            },
            {
              kind: 'block',
              type: 'descriptioncomma',
            },
            {
              kind: 'block',
              type: 'enumi',
            },
            {
              kind: 'block',
              type: 'asctime',
            },
            {
              kind: 'block',
              type: 'service',
            },
            {
              kind: 'block',
              type: 'req_id',
            },
            {
              kind: 'block',
              type: 'severity',
            },
            {
              kind: 'block',
              type: 'id',
            },
            {
              kind: 'block',
              type: 'message',
            },
            {
              kind: 'block',
              type: 'Other',
            },
          ],
        },
        {
          kind: 'category',
          name: 'Delimeter',
          contents: [
            {
              kind: 'block',
              type: 'Delimeter',
            },
            {
              kind: 'block',
              type: 'type',
            },

            {
              kind: 'block',
              type: 'descriptioncomma',
            },
            {
              kind: 'block',
              type: 'enumd',
            },
            {
              kind: 'block',
              type: '/',
            },
            {
              kind: 'block',
              type: '|',
            },
            {
              kind: 'block',
              type: 'Other',
            },
          ],
        },
      ],
    },
    {
      kind: 'category',
      name: 'ERRORCODES',
      contents: [
        {
          kind: 'block',
          type: 'Error-Codes',
        },
        {
          kind: 'block',
          type: 'type',
        },

        {
          kind: 'block',
          type: 'items',
        },

        {
          kind: 'block',
          type: 'properties',
        },

        
        {
          kind: 'category',
          name: 'ID',
          contents: [
            {
              kind: 'block',
              type: 'ID',
            },
            
            {
              kind: 'block',
              type: 'type',
            },
            {
              kind: 'block',
              type: 'description',
            },
          ],
        },
        {
          kind: 'category',
          name: 'LOG',
          contents: [
            {
              kind: 'block',
              type: 'Log',
            },
            
            {
              kind: 'block',
              type: 'type',
            },

            {
              kind: 'block',
              type: 'properties',
            },

         

          

            {
              kind: 'category',
              name: 'Messages',
              contents: [
                {
                  kind: 'block',
                  type: 'Messages',
                },
                {
                  kind: 'block',
                  type: 'type',
                },

                {
                  kind: 'block',
                  type: 'description',
                },
              ],
            },
            {
              kind: 'category',
              name: 'Severity',
              contents: [
                {
                  kind: 'block',
                  type: 'Severity',
                },
                {
                  kind: 'block',
                  type: 'type',
                },

                {
                  kind: 'block',
                  type: 'descriptioncomma',
                },
                {
                  kind: 'block',
                  type: 'enums',
                },
                {
                  kind: 'block',
                  type: 'High',
                },
                {
                  kind: 'block',
                  type: 'Low',
                },
                {
                  kind: 'block',
                  type: 'Medium',
                },
              ],
            },
            {
              kind: 'category',
              name: 'Arguments',
              contents: [
                {
                  kind: 'block',
                  type: 'Arguments',
                },
                {
                  kind: 'block',
                  type: 'type',
                },

                {
                  kind: 'block',
                  type: 'properties',
                },
              
             
                {
                  kind: 'category',
                  name: 'Name',
                  contents: [
                    {
                      kind: 'block',
                      type: 'Name',
                    },
                    {
                      kind: 'block',
                      type: 'type',
                    },

                    {
                      kind: 'block',
                      type: 'description',
                    },
                  ],
                },
                {
                  kind: 'category',
                  name: 'Description',
                  contents: [
                    {
                      kind: 'block',
                      type: 'Description',
                    },
                    {
                      kind: 'block',
                      type: 'type',
                    },

                    {
                      kind: 'block',
                      type: 'description',
                    },
                  ],
                },
              ],
            },
          ],
        },

        {
          kind: 'category',
          name: 'Resolution',
          contents: [
            {
              kind: 'block',
              type: 'Resolution',
            },
           
            {
              kind: 'block',
              type: 'type',
            },

            {
              kind: 'block',
              type: 'properties',
            },

            {
              kind: 'category',
              name: 'Description',
              contents: [
                {
                  kind: 'block',
                  type: 'Description',
                },
                {
                  kind: 'block',
                  type: 'type',
                },

                {
                  kind: 'block',
                  type: 'description',
                },
              ],
            },
            {
              kind: 'category',
              name: 'Owner',
              contents: [
                {
                  kind: 'block',
                  type: 'Owner',
                },
                {
                  kind: 'block',
                  type: 'type',
                },

                {
                  kind: 'block',
                  type: 'description',
                },
              ],
            },
            {
              kind: 'category',
              name: 'SelfHealing',
              contents: [
                {
                  kind: 'block',
                  type: 'SelfHealing',
                },
                {
                  kind: 'block',
                  type: 'type',
                },

                {
                  kind: 'block',
                  type: 'description',
                },
              ],
            },
          ],
        },
        {
          kind: 'category',
          name: 'References',
          contents: [
            {
              kind: 'block',
              type: 'References',
            },
            
            {
              kind: 'block',
              type: 'type',
            },
            

            {
              kind: 'block',
              type: 'properties',
            },

            {
              kind: 'category',
              name: 'link',
              contents: [
                {
                  kind: 'block',
                  type: 'link',
                },
                {
                  kind: 'block',
                  type: 'type',
                },

                {
                  kind: 'block',
                  type: 'description',
                },
              ],
            },
          ],
        },
        {
          kind: 'category',
          name: 'ReturnCodes',
          contents: [
            {
              kind: 'block',
              type: 'ReturnCodes',
            },
           
            {
              kind: 'block',
              type: 'type',
            },

            {
              kind: 'block',
              type: 'properties',
            },

        
            {
              kind: 'category',
              name: 'HTTP',
              contents: [
                {
                  kind: 'block',
                  type: 'HTTP',
                },
                {
                  kind: 'block',
                  type: 'type',
                },

                {
                  kind: 'block',
                  type: 'description',
                },
              ],
            },
            {
              kind: 'category',
              name: 'Console',
              contents: [
                {
                  kind: 'block',
                  type: 'Console',
                },
                {
                  kind: 'block',
                  type: 'type',
                },

                {
                  kind: 'block',
                  type: 'descriptioncomma',
                },

                {
                  kind: 'block',
                  type: 'maximum',
                },
                {
                  kind: 'block',
                  type: 'minimum',
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};

Blockly.Blocks['desc'] = {
  init: function () {
    this.appendDummyInput().appendField('description {');
    this.appendStatementInput('properties').setCheck(null);
    this.appendDummyInput().appendField('}');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('');
  },
};

Blockly.Blocks['name'] = {
  init: function () {
    this.appendDummyInput().appendField('Name {');
    this.appendStatementInput('properties').setCheck(null);
    this.appendDummyInput().appendField('}');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('');
  },
};

Blockly.Blocks['items'] = {
  init: function () {
    this.appendDummyInput().appendField('items {');
    this.appendStatementInput('properties').setCheck(null);
    this.appendDummyInput().appendField('}');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('');
  },
};

Blockly.Blocks['loggingformat'] = {
  init: function () {
    this.appendDummyInput().appendField('Logging-Format {');
    this.appendStatementInput('properties').setCheck(null);
    this.appendDummyInput().appendField('}');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('');
  },
};

Blockly.Blocks['Order'] = {
  init: function () {
    this.appendDummyInput().appendField('Order {');
    this.appendStatementInput('properties').setCheck(null);
    this.appendDummyInput().appendField('}');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('');
  },
};
Blockly.Blocks['ID'] = {
  init: function () {
    this.appendDummyInput().appendField('ID {');
    this.appendStatementInput('properties').setCheck(null);
    this.appendDummyInput().appendField('}');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('');
  },
};
Blockly.Blocks['Messages'] = {
  init: function () {
    this.appendDummyInput().appendField('Messages {');
    this.appendStatementInput('properties').setCheck(null);
    this.appendDummyInput().appendField('}');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('');
  },
};
Blockly.Blocks['Severity'] = {
  init: function () {
    this.appendDummyInput().appendField('Severity {');
    this.appendStatementInput('properties').setCheck(null);
    this.appendDummyInput().appendField('}');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('');
  },
};
Blockly.Blocks['Arguments'] = {
  init: function () {
    this.appendDummyInput().appendField('Arguments {');
    this.appendStatementInput('properties').setCheck(null);
    this.appendDummyInput().appendField('}');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('');
  },
};
Blockly.Blocks['Log'] = {
  init: function () {
    this.appendDummyInput().appendField('log {');
    this.appendStatementInput('properties').setCheck(null);
    this.appendDummyInput().appendField('}');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('');
  },
};
Blockly.Blocks['Delimeter'] = {
  init: function () {
    this.appendDummyInput().appendField('Delimeter {');
    this.appendStatementInput('properties').setCheck(null);
    this.appendDummyInput().appendField('}');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('');
  },
};

Blockly.Blocks['Logger'] = {
  init: function () {
    this.appendDummyInput().appendField('Logger {');
    this.appendStatementInput('properties').setCheck(null);
    this.appendDummyInput().appendField('}');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('');
  },
};
Blockly.Blocks['Error-Codes'] = {
  init: function () {
    this.appendDummyInput().appendField('Error-Codes {');
    this.appendStatementInput('properties').setCheck(null);
    this.appendDummyInput().appendField('}');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('');
  },
};

Blockly.Blocks['Plugin'] = {
  init: function () {
    this.appendDummyInput().appendField('Plugin {');
    this.appendStatementInput('properties').setCheck(null);
    this.appendDummyInput().appendField('}');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('');
  },
};
Blockly.Blocks['Plugin-Data'] = {
  init: function () {
    this.appendDummyInput().appendField('Plugin-Data {');
    this.appendStatementInput('properties').setCheck(null);
    this.appendDummyInput().appendField('}');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('');
  },
};
Blockly.Blocks['File-path'] = {
  init: function () {
    this.appendDummyInput().appendField('File-path {');
    this.appendStatementInput('properties').setCheck(null);
    this.appendDummyInput().appendField('}');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('');
  },
};
Blockly.Blocks['Type'] = {
  init: function () {
    this.appendDummyInput().appendField('Type {');
    this.appendStatementInput('properties').setCheck(null);
    this.appendDummyInput().appendField('}');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('');
  },
};
Blockly.Blocks['Max-log-size'] = {
  init: function () {
    this.appendDummyInput().appendField('Max-log-size {');
    this.appendStatementInput('properties').setCheck(null);
    this.appendDummyInput().appendField('}');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('');
  },
};
Blockly.Blocks['Max-log-files'] = {
  init: function () {
    this.appendDummyInput().appendField('Max-log-files {');
    this.appendStatementInput('properties').setCheck(null);
    this.appendDummyInput().appendField('}');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('');
  },
};
Blockly.Blocks['minlength'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('minlength')
      .appendField(new Blockly.FieldNumber(0, 0), 'NAME');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('');
  },
};

Blockly.Blocks['minimum'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('minimum')
      .appendField(new Blockly.FieldNumber(0, 0), 'NAME');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('');
  },
};

Blockly.Blocks['maximum'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('maximum  ')
      .appendField(new Blockly.FieldNumber(0, 0), 'NAME');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('');
  },
};

Blockly.Blocks['description'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('description')
      .appendField(new Blockly.FieldTextInput('      '), 'NAME');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('');
  },
};

Blockly.Blocks['descriptioncomma'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('description')
      .appendField(new Blockly.FieldTextInput('      '), 'NAME');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('');
  },
};

Blockly.Blocks['enum'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('enum')
      .appendField(new Blockly.FieldTextInput(''), 'NAME');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('');
  },
};

Blockly.Blocks['type'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('type')
      .appendField(new Blockly.FieldTextInput('      '), 'NAME');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('');
  },
};
Blockly.Blocks['title'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('title')
      .appendField(new Blockly.FieldTextInput('      '), 'NAME');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('');
  },
};

Blockly.Blocks['start'] = {
  init: function () {
    this.appendDummyInput().appendField(' {');
    this.appendStatementInput('properties').setCheck(null);
    this.appendDummyInput().appendField('}');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('');
  },
};

Blockly.Blocks['properties'] = {
  init: function () {
    this.appendDummyInput().appendField('properties {');
    this.appendStatementInput('properties').setCheck(null);
    this.appendDummyInput().appendField('}');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('');
  },
};
Blockly.Blocks['HTTP'] = {
  init: function () {
    this.appendDummyInput().appendField('HTTP {');
    this.appendStatementInput('properties').setCheck(null);
    this.appendDummyInput().appendField('}');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('');
  },
};
Blockly.Blocks['Console'] = {
  init: function () {
    this.appendDummyInput().appendField('Console {');
    this.appendStatementInput('properties').setCheck(null);
    this.appendDummyInput().appendField('}');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('');
  },
};
Blockly.Blocks['Owner'] = {
  init: function () {
    this.appendDummyInput().appendField('Owner {');
    this.appendStatementInput('properties').setCheck(null);
    this.appendDummyInput().appendField('}');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('');
  },
};
Blockly.Blocks['SelfHealing'] = {
  init: function () {
    this.appendDummyInput().appendField('SelfHealing {');
    this.appendStatementInput('properties').setCheck(null);
    this.appendDummyInput().appendField('}');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('');
  },
};

Blockly.Blocks['Description'] = {
  init: function () {
    this.appendDummyInput().appendField('Description {');
    this.appendStatementInput('properties').setCheck(null);
    this.appendDummyInput().appendField('}');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('');
  },
};
Blockly.Blocks['link'] = {
  init: function () {
    this.appendDummyInput().appendField('link {');
    this.appendStatementInput('properties').setCheck(null);
    this.appendDummyInput().appendField('}');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('');
  },
};
Blockly.Blocks['Resolution'] = {
  init: function () {
    this.appendDummyInput().appendField('Resolution {');
    this.appendStatementInput('properties').setCheck(null);
    this.appendDummyInput().appendField('}');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('');
  },
};
Blockly.Blocks['References'] = {
  init: function () {
    this.appendDummyInput().appendField('References {');
    this.appendStatementInput('properties').setCheck(null);
    this.appendDummyInput().appendField('}');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('');
  },
};
Blockly.Blocks['ReturnCodes'] = {
  init: function () {
    this.appendDummyInput().appendField('ReturnCodes {');
    this.appendStatementInput('properties').setCheck(null);
    this.appendDummyInput().appendField('}');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('');
  },
};
Blockly.Blocks['Console'] = {
  init: function () {
    this.appendDummyInput().appendField('Console {');
    this.appendStatementInput('properties').setCheck(null);
    this.appendDummyInput().appendField('}');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('');
  },
};
Blockly.Blocks['Name'] = {
  init: function () {
    this.appendDummyInput().appendField('Name {');
    this.appendStatementInput('properties').setCheck(null);
    this.appendDummyInput().appendField('}');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('');
  },
};
Blockly.Blocks['Description'] = {
  init: function () {
    this.appendDummyInput().appendField('Description {');
    this.appendStatementInput('properties').setCheck(null);
    this.appendDummyInput().appendField('}');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('');
  },
};
Blockly.Blocks['Owner'] = {
  init: function () {
    this.appendDummyInput().appendField('Owner {');
    this.appendStatementInput('properties').setCheck(null);
    this.appendDummyInput().appendField('}');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('');
  },
};
Blockly.Blocks['SelfHealing'] = {
  init: function () {
    this.appendDummyInput().appendField('SelfHealing {');
    this.appendStatementInput('properties').setCheck(null);
    this.appendDummyInput().appendField('}');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('');
  },
};


Blockly.Blocks['enumi'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldLabelSerializable("enum"), "NAME");
    this.appendValueInput("NAME")
        .setCheck("Array");
    this.appendValueInput("NAME")
      .setCheck("Array");
      this.appendValueInput("NAME")
      .setCheck("Array");
      this.appendValueInput("NAME")
      .setCheck("Array");
      this.appendValueInput("NAME")
      .setCheck("Array");
      this.appendValueInput("NAME")
      .setCheck("Array");
      this.appendValueInput("NAME")
      .setCheck("Array");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};



Blockly.Blocks['enumd'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldLabelSerializable("enum"), "NAME");
    this.appendValueInput("NAME")
        .setCheck("Array");
    this.appendValueInput("NAME")
      .setCheck("Array");
      this.appendValueInput("NAME")
      .setCheck("Array");
      this.appendValueInput("NAME")
      .setCheck("Array");
      this.appendValueInput("NAME")
      .setCheck("Array");
     this
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};



Blockly.Blocks['enums'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldLabelSerializable("enum"), "NAME");
    this.appendValueInput("NAME")
        .setCheck("Array");
    this.appendValueInput("NAME")
      .setCheck("Array");
      this.appendValueInput("NAME")
      .setCheck("Array");
     
     this
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['asctime'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldLabelSerializable("asctime"), "NAME");
    this.setOutput(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Blocks['service'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldLabelSerializable("service"), "NAME");
    this.setOutput(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['req_id'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldLabelSerializable("req_id"), "NAME");
    this.setOutput(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['severity'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldLabelSerializable("severity"), "NAME");
    this.setOutput(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Blocks['id'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldLabelSerializable("id"), "NAME");
    this.setOutput(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['message'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldLabelSerializable("message"), "NAME");
    this.setOutput(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Blocks['Other'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldLabelSerializable("Other"), "NAME");
    this.setOutput(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Blocks['|'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldLabelSerializable("|"), "NAME");
    this.setOutput(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Blocks['/'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldLabelSerializable("/"), "NAME");
    this.setOutput(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Blocks['High'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldLabelSerializable("High"), "NAME");
    this.setOutput(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};Blockly.Blocks['Medium'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldLabelSerializable("Medium"), "NAME");
    this.setOutput(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};Blockly.Blocks['Low'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldLabelSerializable("Low"), "NAME");
    this.setOutput(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};



let workspace = {};

/**
 * Initialize a Blockly workspace, and add a change listener to update the display of generated code.
 *
 * Called from index.html when the page initially loads.
 */
function start() {
  // Create main workspace.
  workspace = Blockly.inject('blocklyDiv', {
    toolbox: toolbox,
  });

  workspace.addChangeListener((event) => {
    const code = Blockly.JavaScript.workspaceToCode(workspace);
    document.getElementById('generatedCodeContainer').value = code;
  });
}

/**
 * Generate JavaScript code from the Blockly workspace, and execute it.
 *
 * Called from index.html when the execute button is clicked.
 */

function executeCode() {
  const code = Blockly.JavaScript.workspaceToCode(workspace);
  const blob = new Blob([code], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'schema.json';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  console.log(code);
}
