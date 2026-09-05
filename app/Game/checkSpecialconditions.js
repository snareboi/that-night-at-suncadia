//all of the special condition events happen here
export function checkSpecialCondition(choices, section, conditions) {
    switch (section) {
    case "Intro":
        if(conditions[0]) {
        choices[20][0] = {
            label: "Ask about Mort's notebook",
            newScene: 27,
            newChoice: 21,
            newImage: -1,
            removed: false,
            key: "0"
        };
        } 
        break;
    case "Park":
        if(conditions[0]) {
        choices[8][0] = {
            label: "Continue",
            newScene: 16,
            newChoice: 9,
            newImage: -1,
            key: "0"
        }
        }
        break;
    case "Cabin":
    if (conditions[0]) {
        choices[1][3] = {
        label: "Mort's notebook",
        newScene: 10,
        newChoice: 5,
        newImage: -1,
        key: "3"
        };

        choices[9][2] = {
        label: "Mort's notebook",
        newScene: 23,
        newChoice: 11,
        newImage: -1,
        key: "2"
        };
        if (choices[13][2] !== "") {
        choices[13][2].newChoice = 15;
        }
    }

    if (conditions[4]) {
        choices[12][2].newScene = 27;
    }
    break;
    case "Tub":
        if (conditions[0]) {
        choices[6][3].newScene = 15;
        choices[6][3].newChoice = 10;
        }
        break;
    case "Evening":
        if (conditions[6] == 1) {
        choices[1][0].newScene = 2;
        } else if (conditions[6] == 2) {
        choices[1][0].newScene = 3;
        } else if (conditions[6] == 3) {
        choices[1][0].newScene = 4;
        } else if (conditions[6] == 4) {
        choices[1][0].newScene = 5;
        }

        if (conditions[1] == 2) {
        choices[2][0].newScene = 9;
        choices[2][0].newChoice = 6;
        } else if (conditions[1] == 3) {
        choices[2][0].newScene = 15;
        choices[2][0].newChoice = 11;
        }
        break;
    case "Inside":
        if (conditions[1] == 2) {
        choices[17][0].newScene = 24;
        } else if (conditions[1] == 2) {
        choices[17][0].newScene = 25;
        }

        if (conditions[9] == 1) {
        choices[31][0].newScene = 49;
        } else if (conditions[9] == 2) {
        choices[31][0].newScene = 48;
        choices[31][0].newChoice = 33;
        
        choices[39][1].newScene = 62;
        }

        if (conditions[6] == 4) {
        choices[35][0].newScene = 52;
        } else if (conditions[6] == 1) {
        choices[35][0].newScene = 54;
        } else if (conditions[6] == 3) {
        choices[35][0].newScene = 55;
        }

        if (conditions[7] == 1 || conditions[7] == 4) {
        choices[41][0].newScene = 64;
        
        choices[42][0].label = "Continue watching the movie",
        choices[42][0].newScene = 66;
        }

        if (conditions[12]) {
        choices[44][0].newScene = 69;
        choices[44][0].newChoice = 45;
        choices[44][0].song = null;
        choices[44][0].sfx = "";
        }
        break;
    case "Ben":
        if (conditions[3]) {
            choices[1][0].newScene = 4;
            choices[5][0].newScene = 14;
            choices[5][0].condition = 8;
            choices[5][0].type = "boolean"
        }

        if (conditions[2]) {
            choices[4][2].newScene = 15;
            choices[4][2].newChoice = 5;
        }

        if (conditions[8]) {
            choices[38][0].newScene = 55;
        }

        if (conditions[9]) {
            choices[22][0].newScene = 36;
        }
        break;
    case "Panic":
        if (conditions[0]) {
        choices[6][0].newScene = 10;
        choices[23][0].newScene = 10;
        }

        if (conditions[7] == 3) {
        choices[32][1] = {
            label: "\"He said he was happy to be here\"",
            newScene: 31,
            newChoice: 33,
            newImage: -1,
            key: "1"
        };
        }

        if (conditions[9] == 2) {
        choices[33][0].newScene = 41;
        choices[35][0].newScene = 45;
        }

        if (conditions[14] == 1) {
        choices[5][0].newScene = 42;
        choices[5][0].newChoice = 34;

        choices[36][0] = choices[40][0];
        
        choices[45][0].newScene = 65;
        } else if (conditions[14] == 2) {
        choices[38][0].newScene = 58;
        
        choices[36][0] = choices[42][0];

        choices[39][0].newScene = 40;
        choices[39][0].newChoice = 32;
        }

        if (conditions[15]) {
        choices[9][0].newScene = 61;
        choices[14][0].newScene = 61;
        choices[25][0].newScene = 61;
        choices[29][0].newScene = 61;

        choices[46][0].newScene = 67;
        choices[46][0].newChoice = 47;
        choices[46][0].newImage = -1;

        choices[80][0].newScene = 101;
        } else if (conditions[13]) {
        choices[9][0].newScene = 62;
        choices[14][0].newScene = 62;
        choices[25][0].newScene = 62;
        choices[29][0].newScene = 62;

        choices[46][0].newScene = 68;
        choices[46][0].newChoice = 47;
        choices[46][0].newImage = -1;

        choices[48][1].newScene = 73;
        }

        if (conditions[16]) {
        choices[65][0].newImage = 9;
        
        choices[66][0].newChoice = 71;

        choices[75][0].newScene = 95;
        choices[76][0].newScene = 97;

        choices[78][0].newChoice = 80;
        choices[81][0].newScene = 104;
        }

        if (conditions[14] == 1 && !conditions[16]) {
        choices[79][0].newScene = 100;
        }
        break;
    case "Lodge":
        if (conditions[7] == 3) {
        choices[1][0].newScene = 2;
        }
        
        if (conditions[8]) {
        choices[23][0].newScene = 30;
        }
        break;
    case "After":
        if ((conditions[14] == 0 || conditions[14] == 2) && conditions[16]) { //if Alicia and Roxy alive
        choices[1][0].newScene = 3;
        choices[29][0].newScene = 49;
        choices[38][0].newScene = 63;

        choices[40][1].newScene = 91;
        choices[53][0].newScene = 92;
        choices[55][0].newScene = 93;
        choices[57][0].newScene = 94;
        choices[59][0].newScene = 95;
        choices[61][0].newScene = 96;

        choices[75][0].newScene = 123;
        choices[89][0].newScene = 151;
        choices[91][1].newScene = 152;

        choices[95][0].newScene = 159;
        choices[96][0].newScene = 160;
        choices[97][0].newScene = 161;
        choices[98][0].newScene = 162;

        choices[104][1].newScene = 189;
        choices[105][0].newScene = 193;
        } else if (conditions[14] == 1 && !conditions[16]) { //if Ben alive, Roxy dead
        choices[1][0].newScene = 4;
        choices[29][0].newScene = 50;
        choices[38][0].newScene = 64;

        choices[40][1].newScene = 97;
        choices[53][0].newScene = 98;
        choices[55][0].newScene = 99;
        choices[57][0].newScene = 100;
        choices[59][0].newScene = 101;
        choices[61][0].newScene = 102;

        choices[75][0].newScene = 124;
        choices[89][0].newScene = 163;
        choices[91][1].newScene = 166;

        choices[105][0].newScene = 195;
        } else if (conditions[14] == 1 && conditions[16]) { //if Ben and Roxy alive
        choices[1][0].newScene = 5;
        choices[29][0].newScene = 51;
        choices[38][0].newScene = 65;

        choices[40][1].newScene = 103;
        choices[53][0].newScene = 104;
        choices[55][0].newScene = 105;
        choices[57][0].newScene = 106;
        choices[59][0].newScene = 107;
        choices[61][0].newScene = 108;

        choices[75][0].newScene = 125;
        choices[89][0].newScene = 170;
        choices[91][1].newScene = 168;

        choices[104][1].newScene = 189;
        choices[105][0].newScene = 196;
        }


        if (conditions[14] == 1) { //if Ben's alive
        choices[2][0].newScene = 7;
        choices[10][0].newScene = 19;
        choices[14][0].newScene = 27;

        choices[86][0].newScene = 140;
        choices[87][0].newScene = 141;
        choices[88][0].newScene = 142;
        choices[88][1].label = "\"Ben stop!\""
        choices[88][1].newScene = 143;
        choices[88][2].newScene = 144;
        choices[90][0].newScene = 164;
        choices[91][0].newScene = 165;
        
        choices[91][2].newScene = 167;
        choices[91][3].newScene = 165;
        choices[92][0].newScene = 169;
        if (conditions[18]) {
            choices[61][0].newChoice = 64;
        } else {
            choices[61][0].newChoice = 66;
        }

        if (conditions[19] && conditions[16]) { //did Ben confess and is Roxy alive?
            choices[94][1].newScene = 179;
            choices[94][1].newChoice = 100;

            choices[100][0].newScene = 181;
            choices[101][2].newScene = 185;
            choices[102][0].newScene = 185;

            choices[94][0].newScene = 197;
            choices[94][0].newChoice = 107;
            choices[107][0].newScene = 199;
        } else if (conditions[19]) { //did Ben confess but is Roxy dead?
            choices[94][1].newScene = 179;
            choices[94][1].newChoice = 100;

            choices[94][0].newScene = 197;
            choices[94][0].newChoice = 107;
        } else if (conditions[16]) { //did Ben not confess and is Roxy alive?
            choices[95][0].newScene = 175;
            choices[96][0].newScene = 176;
            choices[97][0].newScene = 177;
            choices[98][0].newScene = 178;

            choices[94][0].newScene = 194;
        } else { //did Ben not confess and is Roxy dead?
            choices[95][0].newScene = 171;
            choices[96][0].newScene = 172;
            choices[97][0].newScene = 173;
            choices[98][0].newScene = 174;
            
            choices[94][0].newScene = 194;
        }
        }

        if (conditions[16]) { //if Roxy's alive
        choices[3][0].newScene = 9;
        choices[3][0].newChoice = 4;
        choices[6][0].newScene = 13;
        choices[17][0].newChoice = 19;
        choices[27][0].newScene = 42;
        choices[37][0].newScene = 60;

        choices[67][0].newScene = 113;
        choices[70][0].newScene = 117;

        choices[106][0].label = "Try to convince them to come";
        choices[106][0].newScene = 25;
        choices[106][1].label = "Leave them";
        choices[106][1].newScene = 201;

        choices[109][0].label = "Try to convince them to come";
        choices[109][0].newScene = 25;
        choices[109][1].label = "Leave them";
        choices[109][1].newScene = 201;
        
        choices[99][0].newScene = 45;
        choices[103][0].newScene = 45;
        }

        if (conditions[15]) { //if you made it to the park bathroom (don't know Mabel's name)
        choices[13][0].newScene = 25;
        choices[30][0].newScene = 53;
        }

        if (conditions[11]) { //if you saw the monster
        choices[14][0].newChoice = 15;
        }

        if (conditions[17]) { //if you called your mom
        choices[26][0].newScene = 41;
        choices[28][0].newScene = 45;
        choices[84][0].newScene = 133;
        }

        if (conditions[5]) { //if you read the notebook earlier
        choices[51][0].newScene = 79;
        }

        if (conditions[8]) { //if you helped Ben through his problems
        choices[66][0].newScene = 111;
        choices[66][0].newChoice = 67;
        choices[66][0].sfx = "";
        choices[66][0].condition = 19;
        choices[66][0].type = "boolean"
        }

        if (conditions[18]) { //if you checked on Pepper
        choices[72][0].newChoice = 74;
        }
        
        if (conditions[20]) { //if you went to find your friends
        choices[97][0].newChoice = 105;
        }
        break;
    case "Convince":
        if (conditions[16]) { //if Roxy is alive
        choices[0][0].newScene = 26;
        
        choices[1][0].newScene = 27;
        choices[1][1].label = "\"You both can't stay here. It's not safe here alone\"";
        choices[1][2].label = "\"I'm not leaving until you both come\"";

        choices[2][0].newScene = 28;
        choices[3][0].newScene = 29;
        choices[3][1].newScene = 30;
        choices[3][2].newScene = 31;

        choices[4][1].newScene = 32;
        choices[4][2] = "";

        choices[5][0].newScene = 33;

        choices[6][0].newScene = 34;
        choices[6][1].newScene = 35;
        choices[6][2].newScene = 36;

        choices[8][0].newScene = 37;
        choices[8][1].newScene = 37;
        choices[8][2].newScene = 37;

        choices[9][0].newScene = 38;
        }

        if (conditions[21] >= 4 && conditions[16]) { //Roxy and Pepper convinced
        choices[10][0].newScene = 41;
        if (conditions[19]) {
            choices[11][0].newScene = 43;
        } else {  
            choices[11][0].newScene = 42;
        }
        } else if (conditions[21] >= 4) { //only Pepper convinced
        choices[10][0].newScene = 22;
        if (conditions[19]) {
            choices[11][0].newScene = 24;            
        } else {
            choices[11][0].newScene = 23;
        }
        } else if (conditions[21] >= 3 && conditions[16]) { //only Roxy convinced
        choices[10][0].newScene = 44;
        if (conditions[19]) {
            choices[11][0].newScene = 46;            
        } else {
            choices[11][0].newScene = 45;
        }
        } else if (conditions[16]) { //Roxy and Pepper not convinced
        choices[10][0].newScene = 39;
        choices[11][0].newScene = 40;
        }
        break;
    case "Search":
        if (conditions[14] == 1 && conditions[16] && conditions[21] >= 4) { //Ben, Roxy and Pepper
        choices[0][0].newScene = 6;
        choices[0][0].newChoice = 1;
        } else if (conditions[14] == 1 && conditions[16] && conditions[21] >= 3) { //Ben and Roxy
        choices[0][0].newScene = 5;
        choices[0][0].newChoice = 1;
        } else if (conditions[14] == 1 && conditions[21] >= 4) { //Ben and Pepper
        choices[0][0].newScene = 4;
        choices[0][0].newChoice = 1;
        } else if (conditions[16] && conditions[21] >= 4) { //Alicia, Roxy and Pepper
        choices[0][0].newScene = 3;
        choices[0][0].newChoice = 1;
        } else if (conditions[16] && conditions[21] >= 3) { //Alicia and Roxy
        choices[0][0].newScene = 2;
        choices[0][0].newChoice = 1;
        } else if (conditions[21] >= 4) { //Alicia and Pepper
        choices[0][0].newScene = 1;
        choices[0][0].newChoice = 1;
        }

        if (conditions[14] == 1 && conditions[16] && conditions[21] >= 3) { //Ben and Roxy
        choices[28][0].newScene = 53;
        choices[37][0].newScene = 67;
        } else if (conditions[14] == 1) { //Ben
        choices[28][0].newScene = 54;
        choices[37][0].newScene = 66;
        } else if (conditions[16] && conditions[21] >= 3) { //Alicia and Roxy
        choices[28][0].newScene = 52;
        choices[37][0].newScene = 65;
        }
        
        
        if (conditions[21] >= 4) { //if Pepper's there
        choices[3][0].newScene = 10;
        choices[6][0].newChoice = 7;
        choices[23][0].newChoice = 24;
        choices[35][0].newChoice = 36;
        } 

        if (conditions[16] && conditions[21] >= 3) {
        choices[25][0].newChoice = 26;
        }

        if (conditions[21] >= 4 && conditions[16]) { //if Pepper and Roxy are there
        choices[10][0].newScene = 39;
        choices[15][0].newScene = 41;
        } else if (conditions[21] >= 3 && conditions[16]) { //if only Roxy's there
        choices[10][0].newScene = 38;
        choices[15][0].newScene = 40;    
        } else if (conditions[21] >= 4) { //if only Pepper's there
        choices[10][0].newScene = 20;
        choices[15][0].newScene = 32;
        }

        if (conditions[14] == 1) { //if Ben's there
        choices[4][0].newScene = 12;
        choices[9][0].newScene = 18;
        choices[11][0].newScene = 24;
        choices[12][0].newScene = 25;
        choices[20][0].newScene = 12;
        if (conditions[15]) { //if you made it to the bathroom
            choices[13][0].newScene = 27;
            choices[14][0].newScene = 30;
        } else {
            choices[13][0].newScene = 26;
            choices[14][0].newScene = 29;
        }
        }

        if (conditions[16] && conditions[21] < 3) { //if Pepper and Roxy stayed behind
        choices[0][0].newScene = 33;
        choices[0][0].newChoice = 17;
        } else if (conditions[16]) { //if at Roxy and/or Pepper came
        choices[1][0].newScene = 33;
        choices[1][0].newChoice = 17;
        }
        
        if (conditions[14] == 1 && conditions[21] >= 4) { //if Ben and Pepper
        choices[25][0].newScene = 48;
        } else if (conditions[21] >= 4) { //if Pepper and Alicia
        choices[25][0].newScene = 47;
        } else if (conditions[14] == 1) { //if Ben
        choices[25][0].newScene = 46;
        }

        if (conditions[15] && conditions[14] == 1) { //saved Ben after leaving the bathroom
        choices[28][1].newChoice = 40;
        choices[40][0].newScene = 75;
        choices[41][0].newScene = 76;
        choices[42][0].newScene = 77;
        choices[43][0].newScene = 78;
        } else if (conditions[15]) { //saved Alicia after leaving the bathroom
        choices[28][1].newChoice = 40;
        }
        break;
    case "Stay":
        if (conditions[17]) {
        choices[6][2] = {
            label: "\"My mom is coming to get us\"",
            newScene: 11,
            newChoice: 7,
            newImage: -1,
            key: "2"
        };
        }

        if (conditions[24] >= 2) {
        
        choices[24][0].newChoice = 25;
        

        if (conditions[11]) {
            choices[25][0].newScene = 33;
        }
        }

        if (conditions[11]) {
        choices[17][1].label = "\"The monster\"";
        }

        if (conditions[16]) {
        choices[3][0].newScene = 46;

        choices[6][0].newScene = 47;
        choices[6][1].newScene = 48;
        choices[6][3].newScene = 49;
        choices[7][0].newScene = 50;
        choices[10][0].newScene = 53;
        choices[18][0].newScene = 54;
        choices[19][0].newScene = 55;
        choices[20][0].newScene = 56;
        choices[21][0].newScene = 57;
        choices[22][0].newScene = 55;
        choices[23][0].newScene = 58;
        choices[24][0].newScene = 59;

        choices[26][0].newScene = 60;
        choices[28][0].newScene = 61;
        choices[36][0].newScene = 62;

        choices[38][0].newScene = 64;

        choices[39][0].newScene = 67;
        choices[40][0].newScene = 69;
        choices[41][0].newScene = 71;
        choices[44][0].newScene = 75;
        }

        if (conditions[24] >= 2 && conditions[16]) {
        choices[9][0].newScene = 52;
        } else if (conditions[24] >= 2) {
        choices[9][0].newScene = 16;
        } else if (conditions[16]) {
        choices[9][0].newScene = 51;
        }
        
        break;
    case "Dungeon":
        if (conditions[14] == 1) { //Ben's alive
            choices[2][0].newScene = 4;

            choices[12][0].newChoice = 14;
            choices[18][0].newScene = 28;
            choices[18][0].newChoice = 21;

            if (choices[52][2] != "") {
                choices[52][2].newScene = 89;
                if (conditions[26]) {
                    choices[52][2].newChoice = 78;
                } else {
                    choices[52][2].newChoice = 66;
                }
            }
            
            choices[85][0].newScene = 116;
            choices[87][0].newScene = 120;
        }

        if (conditions[21] >= 4) { //Pepper's there
            choices[3][0].newChoice = 4;

            choices[9][3].newScene = 37;
            choices[9][3].newChoice = 29;
            choices[26][0].newScene = 46;
            choices[27][0].newScene = 47;

            choices[86][0].newScene = 118;
        }

        if (conditions[14] == 1 && conditions[15]) { //Ben doesn't have his phone
            choices[5][0].newScene = 9;
        } else if (conditions[14] == 1) { //Ben has his phone
            choices[5][0].newScene = 8;
        }

        if (conditions[21] >= 3 && conditions[16]) { //Roxy is there
            choices[5][0].newChoice = 6;
            choices[20][0].newScene = 27;
            choices[9][4].newScene = 49;
            choices[39][0].newScene = 56;
            choices[40][0].newChoice = 45;

            choices[9][1].newScene = 70;
            choices[92][0].newScene = 130;
            choices[97][0].newScene = 145;
        }

        if (conditions[13]) { //went to the lodge
            choices[56][0].newChoice = 76;
            choices[98][0].newScene = 147;
        }

        if (conditions[7] != 3) { //didn't go to the park with Ben
            choices[67][0].newChoice = 69;
        }

        if (conditions[3]) { //if you know in depth about Ben's problems
            choices[75][0].newScene = 104;
            choices[75][0].condition = 8;
            choices[75][0].type = "boolean"
        }

        if (conditions[2]) { //if you engaged with Ben at least once in his confession
            choices[74][2].newScene = 105;
            choices[74][2].newChoice = 75;
        }

        if (conditions[26]) { //if you found the code to the door
            choices[9][0].newChoice = 83;
        }

        if (conditions[27]) { //if you led
            choices[89][0].newScene = 123;
            choices[94][0].newScene = 138;
        }

        if (conditions[14] == 1 && conditions[21] >= 4) { //if Ben and Pepper are alive
            choices[90][0].newScene = 127;
            choices[96][0].newScene = 143;
        } else if (conditions[21] >= 4) { //if Alicia and Pepper are alive
            choices[90][0].newScene = 126;
            choices[96][0].newScene = 142;
        } else if (conditions[14] == 1) { //if just Ben is alive
            choices[96][0].newScene = 141;
        }

        if (conditions[19] && conditions[21] >= 4) { //if Ben confessed and Pepper is there
            choices[93][0].newScene = 133;
        } else if (conditions[21] >= 4) { //if Ben didn't confess and Pepper is there
            choices[93][0].newScene = 132;
        } else if (conditions[14] == 1 && conditions[21] < 3 && conditions[16]) { //if Ben's alive and Pepper and Roxy were left behind
            choices[93][0].newScene = 136;
        } else if (conditions[14] == 1 && conditions[21] < 4) { //if Ben's alive and Pepper was left behind
            choices[93][0].newScene = 135;
        } else if (conditions[21] < 3 && conditions[16]) { //if Alicia's alive and Roxy and Pepper were left behind
            choices[93][0].newScene = 134;
        }
        break;
    case "Stronghold A":
        if (conditions[16] && conditions[21] >= 4) { //if Pepper and Roxy are there
            choices[0][0].newScene = 2;
            choices[0][0].newChoice = 1;

        } else if (conditions[21] >= 4) { //if just Pepper is there
            choices[0][0].newScene = 1;
            choices[0][0].newChoice = 1;
            
        }

        if (conditions[21] >= 4) { //if Pepper is there
            choices[6][0].newChoice = 7;
        } 

        if (conditions[16] && conditions[21] >= 3) { //if Roxy is there
            choices[8][0].newScene = 20;
            choices[11][0].newScene = 24;
            choices[11][1].newScene = 26;
        }

        if (conditions[16] && conditions[21] >= 3) { //if at least one of either Roxy or Pepper are there
            choices[2][0].newScene = 7;
        } else if (conditions[21] >= 4) {
            choices[2][0].newScene = 8;
        }

        if (conditions[14] == 1) { //if Ben's alive
            choices[1][0].newScene = 5;
            choices[3][0].newScene = 10;
            choices[5][0].newScene = 14;
            choices[6][0].newScene = 16;
            choices[7][0].newScene = 18;

            choices[10][0].newScene = 22;
        }

        if (conditions[13]) { //if you went to the lodge
            choices[4][0].newScene = 12;
        } else if (conditions[15]) { //if you went to the 
            choices[5][0].newChoice = 10;
        }
        break;
    }

    
}