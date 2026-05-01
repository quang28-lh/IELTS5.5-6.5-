export const allTests = {
    "1": {
        "title": "CAMBRIDGE 4 - TEST 1",
        "audio": "test1.mp3",
        "questionsHTML": `
            <style>
                .ielts-table { width: 100%; border-collapse: collapse; margin-bottom: 20px; border: 1px solid #000; text-align: left; }
                .ielts-table th, .ielts-table td { border: 1px solid #000; padding: 10px; vertical-align: top; }
                .ielts-table th { background-color: #e0e0e0; font-weight: bold; text-align: center; text-transform: uppercase; }
                .notes-box { border: 1px solid #000; padding: 15px; margin-bottom: 20px; }
                .q-num { font-weight: bold; font-size: 16px; margin-right: 5px; color: #000; background: none; }
                .input-box { border: none; border-bottom: 1px dashed #000; outline: none; font-size: 16px; font-family: inherit; color: #d32f2f; font-weight: bold; width: 180px; background: transparent; padding: 2px 5px; text-align: left; }
                .input-box:focus { border-bottom: 2px solid #2196F3; }
                ul.dashed { list-style-type: none; padding-left: 20px; margin-top: 5px; }
                ul.dashed li::before { content: "• "; font-weight: bold; display: inline-block; width: 1em; margin-left: -1em; }
            </style>

            <div class="question-section">
                <h3>Questions 1-4</h3>
                <div class="notes-box">
                    <h3 style="text-align: center; margin-top: 0; text-transform: uppercase; font-size: 18px;">Notes on Social Programme</h3>
                    <div style="display: flex; justify-content: space-between; margin-bottom: 15px; font-style: italic;">
                        <span>Example<br><span style="font-style: normal;">Number of trips per month:</span></span>
                        <span style="text-align: right;">Answer<br><span style="font-weight: bold; font-style: normal;">5</span></span>
                    </div>
                    
                    <p style="font-weight: bold; margin-bottom: 5px;">Visit places which have:</p>
                    <ul class="dashed">
                        <li>historical interest</li>
                        <li>good <span class="q-num">1</span> <input type="text" id="q1" class="input-box"></li>
                        <li><span class="q-num">2</span> <input type="text" id="q2" class="input-box"></li>
                    </ul>
                    
                    <table style="width: 100%; margin-top: 15px; border-collapse: collapse;">
                        <tr>
                            <td style="width: 150px; font-weight: bold;">Cost:</td>
                            <td>between £5.00 and £15.00 per person</td>
                        </tr>
                        <tr>
                            <td style="font-weight: bold;">Note:</td>
                            <td>special trips organised for groups of <span class="q-num">3</span> <input type="text" id="q3" class="input-box" style="width: 100px;"> people</td>
                        </tr>
                        <tr>
                            <td style="font-weight: bold;">Time:</td>
                            <td>departure – 8.30 a.m.<br>return – 6.00 p.m.</td>
                        </tr>
                        <tr>
                            <td style="font-weight: bold; padding-top: 10px;">To reserve a seat:</td>
                            <td style="padding-top: 10px;">sign name on the <span class="q-num">4</span> <input type="text" id="q4" class="input-box"> 3 days in advance</td>
                        </tr>
                    </table>
                </div>
            </div>

            <div class="question-section">
                <h3>Questions 5-10</h3>
                <p style="font-style: italic;">Complete the table below.</p>
                <p style="font-style: italic;">Write <strong>NO MORE THAN THREE WORDS AND / OR A NUMBER</strong> for each answer.</p>
                
                <h3 style="text-align: center; text-transform: uppercase; font-size: 18px; margin-bottom: 5px;">Weekend Trips</h3>
                <table class="ielts-table">
                    <tr>
                        <th>Place</th>
                        <th>Date</th>
                        <th>Number of seats</th>
                        <th style="background-color: #d5d5d5;">Optional extra</th>
                    </tr>
                    <tr>
                        <td>St Ives</td>
                        <td><span class="q-num">5</span> <input type="text" id="q5" class="input-box" style="width: 120px;"></td>
                        <td>16</td>
                        <td>Hepworth Museum</td>
                    </tr>
                    <tr>
                        <td>London</td>
                        <td>16th February</td>
                        <td>45</td>
                        <td><span class="q-num">6</span> <input type="text" id="q6" class="input-box" style="width: 120px;"></td>
                    </tr>
                    <tr>
                        <td><span class="q-num">7</span> <input type="text" id="q7" class="input-box" style="width: 100px;"></td>
                        <td>3rd March</td>
                        <td>18</td>
                        <td>S.S. Great Britain</td>
                    </tr>
                    <tr>
                        <td>Salisbury</td>
                        <td>18th March</td>
                        <td>50</td>
                        <td>Stonehenge</td>
                    </tr>
                    <tr>
                        <td>Bath</td>
                        <td>23rd March</td>
                        <td>16</td>
                        <td><span class="q-num">8</span> <input type="text" id="q8" class="input-box" style="width: 120px;"></td>
                    </tr>
                </table>
                
                <div class="notes-box" style="border: 1px solid #000; padding: 10px;">
                    <p style="font-weight: bold; margin-top: 0;">For further information:</p>
                    <p style="margin-bottom: 0;">Read the <span class="q-num">9</span> <input type="text" id="q9" class="input-box" style="width: 180px;"> or see Social Assistant: Jane <span class="q-num">10</span> <input type="text" id="q10" class="input-box" style="width: 120px;"></p>
                </div>
            </div>
        `,
        "answers": {
            "q1": ["shopping"],
            "q2": ["guided tours"],
            "q3": ["more than 12", "12", ">12"],
            "q4": ["notice board", "noticeboard"],
            "q5": ["13th of february", "13th february", "february 13", "13 february"],
            "q6": ["tower of london"],
            "q7": ["bristol"],
            "q8": ["american museum"],
            "q9": ["student newspaper"],
            "q10": ["yentob"]
        },
"vocabulary": [
    { word: "Itinerary", type: "n", phonetic: "/aɪˈtɪn.ər.ər.i/", meaning: "Lộ trình/Lịch trình chuyến đi" },
    { word: "Accommodation", type: "n", phonetic: "/əˌkɒm.əˈdeɪ.ʃən/", meaning: "Chỗ ở" },
    { word: "Destination", type: "n", phonetic: "/ˌdes.tɪˈneɪ.ʃən/", meaning: "Điểm đến" },
    { word: "Excursion", type: "n", phonetic: "/ɪkˈskɜː.ʃən/", meaning: "Chuyến tham quan ngắn" },
    { word: "Availability", type: "n", phonetic: "/əˌveɪ.ləˈbɪl.ə.ti/", meaning: "Sự sẵn có (phòng, vé)" }
],

        "transcript": `
            <div class="transcript-section" style="font-size: 16px; line-height: 1.8;">
                <p><strong>Official:</strong> Good morning.</p>
                <p><strong>Student:</strong> Good morning. How can I help you?</p>
                <p><strong>Official:</strong> I understand that the school organises trips to different...</p>
                <p><strong>Student:</strong> Yes, we run five every month... Three during weekends and two Wednesday afternoon trips.</p>
                <p><strong>Official:</strong> What sort of places?</p>
                <p><strong>Student:</strong> Well, obviously it varies, but always places of historical interest, and also which offer a variety of <span class="highlight">shopping (Q1)</span> because our students always ask about that. And then we go for ones where we know there are <span class="highlight">guided tours (Q2)</span> because this gives a good focus for the visit.</p>
                <p><strong>Official:</strong> Do you travel far?</p>
                <p><strong>Student:</strong> Well, we're lucky here, obviously, because we're able to say that all our visits are less than three hours drive.</p>
                <p><strong>Official:</strong> How much do they cost?</p>
                <p><strong>Student:</strong> Again it varies... between five and fifteen pounds a head, depending on distance.</p>
                <p><strong>Official:</strong> Uh-huh.</p>
                <p><strong>Student:</strong> Oh, and we do offer to arrange special trips if, you know, there are <span class="highlight">more than 12 (Q3)</span> people.</p>
                <p><strong>Official:</strong> Oh right, I'll keep that in mind. And what are the times normally?</p>
                <p><strong>Student:</strong> We try to keep it pretty fixed so that... that students get to know the pattern. We leave at 8.30 a.m. and return at 6.00 p.m. We figure it's best to keep the day fairly short.</p>
                <p><strong>Official:</strong> Oh yes. And how do we reserve a place?</p>
                <p><strong>Student:</strong> You sign your name on the <span class="highlight">notice board (Q4)</span>. Do you know where it is?</p>
                <p><strong>Official:</strong> Uh-huh, I saw it this morning.</p>
                <p><strong>Student:</strong> And we do ask that you sign up three days in advance so we know we've got enough people interested to run it, and we can cancel if necessary, with full refund of course.</p>
                <p><strong>Official:</strong> That's fine, thanks.</p>
                <hr style="border-top: 1px dashed #ccc; margin: 15px 0;">
                <p><strong>Official:</strong> And what visits are planned for this term?</p>
                <p><strong>Student:</strong> Right, well, I'm afraid the schedule hasn't been printed out yet, but we have confirmed the dates and planned the optional extra visits which you can also book in advance if you want to.</p>
                <p><strong>Official:</strong> Oh that's all right. If you can just give some idea of the weekend ones so I can, you know, work out when to see friends, etc.</p>
                <p><strong>Student:</strong> Oh sure. Well, the first one is St Ives, that's on the <span class="highlight">13th of February (Q5)</span> and we'll have only 16 places available because we're going by minibus. And that's a day in town with the optional extra of visiting the Hepworth Museum.</p>
                <p><strong>Official:</strong> All right... yeah... that sounds good.</p>
                <p><strong>Student:</strong> Then there's a London trip on the 16th of February and we'll be taking a medium-sized coach so there'll be 45 places on that. And let's see, the optional extra is the <span class="highlight">Tower of London (Q6)</span>.</p>
                <p><strong>Official:</strong> Oh, I've already been there.</p>
                <p><strong>Student:</strong> Ah. After that there's <span class="highlight">Bristol (Q7)</span> on the 3rd of March.</p>
                <p><strong>Official:</strong> Where?</p>
                <p><strong>Student:</strong> Bristol... B-R-I-S-T-O-L.</p>
                <p><strong>Official:</strong> OK.</p>
                <p><strong>Student:</strong> That's in a different minibus with 18 places available. Oh, and the optional extra is a visit to the S.S. Great Britain.</p>
                <p><strong>Official:</strong> OK...</p>
                <p><strong>Student:</strong> We're going to Salisbury on the 18th of March and that's always a popular one because the optional extra is Stonehenge. So we're taking the large coach with 50 seats.</p>
                <p><strong>Official:</strong> Oh good.</p>
                <p><strong>Student:</strong> And then the last one is to Bath on the 23rd of March.</p>
                <p><strong>Official:</strong> Oh yes. Is Bath the Roman city?</p>
                <p><strong>Student:</strong> Yes, that's right, and that's in the 16-seater minibus.</p>
                <p><strong>Official:</strong> And where's the optional visit?</p>
                <p><strong>Student:</strong> It's to the <span class="highlight">American Museum (Q8)</span>. Well worth a visit.</p>
                <p><strong>Official:</strong> OK, well that's great... thanks for all that.</p>
                <p><strong>Student:</strong> My pleasure. Oh, by the way, if you want more information about any of the trips, have a look in the <span class="highlight">student newspaper (Q9)</span>.</p>
                <p><strong>Official:</strong> OK.</p>
                <p><strong>Student:</strong> Or have a word with my assistant. Her name is Jane <span class="highlight">Yentob (Q10)</span>. That's Y-E-N-T-O-B.</p>
                <p><strong>Official:</strong> Right, I've got that. Thank you very much for all your help.</p>
                <p><strong>Student:</strong> You're very welcome. I hope you enjoy the trips.</p>
            </div>
        `
    },

"2": {
        "title": "CAMBRIDGE 4 - TEST 2",
        "audio": "test2.mp3",
        "questionsHTML": `
            <style>
                /* CSS VẼ BẢN ĐỒ DÀNH RIÊNG CHO TEST 2 */
                .css-map { position: relative; width: 100%; height: 550px; background-color: #cfd8dc; border: 2px solid #000; margin-bottom: 60px; box-sizing: border-box; font-size: 13px; font-family: 'Segoe UI', sans-serif;}
                .map-building { position: absolute; background-color: #fff; border: 2px solid #000; display: flex; flex-direction: column; justify-content: center; align-items: center; text-align: center; padding: 5px; box-sizing: border-box; }
                .river { position: absolute; left: 0; top: 0; width: 100px; height: 100%; background-color: #e3f2fd; border-right: 2px solid #000; display: flex; align-items: center; justify-content: center; font-style: italic; font-size: 18px; color: #1565c0; flex-direction: column; }
                .entrance { position: absolute; bottom: 0; left: 50%; transform: translateX(-50%); width: 70px; height: 40px; background-color: #fff; border: 2px solid #000; border-bottom: none; display: flex; flex-direction: column; justify-content: center; align-items: center; font-weight: bold; }
                .car-park { position: absolute; bottom: 50px; left: 50%; transform: translateX(-50%); font-weight: bold; }
                .yard { position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); font-weight: bold; }
                .toilets { bottom: 10px; right: 10px; width: 60px; height: 40px; }
                .stables { top: 220px; right: 50px; width: 70px; height: 100px; }
                .works-office { bottom: 100px; right: 50px; width: 70px; height: 80px; }
                .grinding { top: 120px; left: 150px; width: 90px; height: 70px; transform: rotate(-20deg); }
                .engine { top: 50px; left: 240px; width: 90px; height: 70px; transform: rotate(-10deg); }
                .road { position: absolute; bottom: -50px; left: 0; width: 100%; text-align: center; border-top: 5px dashed #000; padding-top: 15px; font-weight: bold; font-size: 16px; }
                .b-15 { bottom: 10px; right: 100px; width: 110px; height: 70px; }
                .b-16 { bottom: 10px; left: 120px; width: 110px; height: 70px; }
                .b-17 { top: 30px; left: 380px; width: 120px; height: 80px; }
                .b-18 { top: 110px; right: 50px; width: 90px; height: 100px; border-radius: 0 40px 0 0; }
                .b-19 { top: 230px; left: 120px; width: 80px; height: 80px; transform: rotate(-25deg); }
                .b-19 > div { transform: rotate(25deg); }
                .b-20 { bottom: 100px; left: 120px; width: 100px; height: 140px; }
                .map-input { width: 85px !important; font-size: 13px !important; text-align: center; margin: 3px 0; border: none; border-bottom: 1px solid #666 !important; background: transparent; outline: none; }
                .map-input:focus { border-bottom: 2px solid #2196F3 !important; }
                .q-num { font-weight: bold; margin-right: 5px; font-size: 14px; background-color: #333; color: white; padding: 2px 6px; border-radius: 4px; }
            </style>

            <div class="question-section">
                <h3>Questions 11–13</h3>
                <p style="color: #666; font-style: italic;">Complete the sentences below. Write <strong>NO MORE THAN 3 WORDS AND/OR A NUMBER</strong>.</p>
                <div style="text-align: center; font-weight: bold; margin-bottom: 15px; color: #1976D2;">RIVERSIDE INDUSTRIAL VILLAGE</div>
                <p>Riverside Village has water, raw materials and fuels such as <span class="q-num">11</span> <input type="text" id="q11" style="width: 200px;"></p>
                <p>The metal industry was established by <span class="q-num">12</span> <input type="text" id="q12"></p>
                <p>There were over <span class="q-num">13</span> <input type="text" id="q13" style="width: 80px;"> water-powered mills in the area.</p>
            </div>

            <div class="question-section">
                <h3>Questions 14–20</h3>
                <p style="color: #666; font-style: italic;">Label the plan below. Write <strong>NO MORE THAN 2 WORDS</strong>.</p>
                
                <div class="css-map">
                    <div class="river"><span>〰️</span><span>River</span><span>〰️</span><span>〰️</span></div>
                    <div class="entrance">⬆<br>Entrance</div>
                    <div class="car-park">Car Park</div>
                    <div class="yard">Yard</div>
                    <div class="map-building toilets">Toilets</div>
                    <div class="map-building stables">The<br>Stables</div>
                    <div class="map-building works-office">The Works<br>Office</div>
                    <div class="map-building grinding">The Grinding<br>Shop</div>
                    <div class="map-building engine">The Engine<br>Room</div>

                    <div class="road"> <span class="q-num">14</span> <input type="text" id="q14" class="map-input"> Road </div>
                    <div class="map-building b-15"> The <span class="q-num">15</span><input type="text" id="q15" class="map-input"> </div>
                    <div class="map-building b-16"> The <span class="q-num">16</span><input type="text" id="q16" class="map-input"> </div>
                    <div class="map-building b-17"> The <span class="q-num">17</span><input type="text" id="q17" class="map-input"> </div>
                    <div class="map-building b-18"> The <span class="q-num">18</span><input type="text" id="q18" class="map-input"> </div>
                    <div class="map-building b-19"> <div>The <span class="q-num">19</span><br><input type="text" id="q19" class="map-input"></div> </div>
                    <div class="map-building b-20"> The <span class="q-num">20</span><input type="text" id="q20" class="map-input"><br>for workers </div>
                </div>
            </div>
        `,
        "answers": {
            "q11": ["coal and firewood", "coal, firewood", "firewood and coal"], 
            "q12": ["local craftsmen", "craftsmen"], 
            "q13": "160", 
            "q14": "woodside", 
            "q15": "ticket office", 
            "q16": "gift shop", 
            "q17": ["main workshop", "workshop"], 
            "q18": "showroom", 
            "q19": ["cafe", "café"], 
            "q20": "cottages"
        },
        "vocabulary": [
    { word: "Apparatus", type: "n", phonetic: "/ˌæp.əˈreɪ.təs/", meaning: "Thiết bị, dụng cụ thí nghiệm" },
    { word: "Component", type: "n", phonetic: "/kəmˈpəʊ.nənt/", meaning: "Linh kiện, thành phần cấu tạo" },
    { word: "Hypothesis", type: "n", phonetic: "/haɪˈpɒθ.ə.sɪs/", meaning: "Giả thuyết (khoa học)" },
    { word: "Mechanism", type: "n", phonetic: "/ˈmek.ə.nɪ.zəm/", meaning: "Cơ chế hoạt động" },
    { word: "Observation", type: "n", phonetic: "/ˌɒb.zəˈveɪ.ʃən/", meaning: "Sự quan sát, ghi nhận số liệu" }
],
        "transcript": `
            <div class="transcript-section" style="font-size: 15px; line-height: 1.6; color: #333;">
                <p><strong>Guide:</strong> Good afternoon everybody and welcome to Riverside Industrial Village...</p>
                <p>Riverside Village was a good place to start an industry because it had water, raw materials and also an abundance of local fuels, such as <span class="highlight">coal and firewood (Q11)</span>.</p>
                <p>The metal industry was established at Riverside Village by <span class="highlight">local craftsmen (Q12)</span> who lived in the area... By the seventeenth and eighteenth centuries the region's rivers supported <span class="highlight">more than 160 (Q13)</span> water-powered mills.</p>
                <hr style="border: 1px dashed #ccc; margin: 15px 0;">
                <p>Now I’m going to give you a plan of the site. That’s <span class="highlight">Woodside (Q14)</span> Road, which is the entrance to the village.</p>
                <p>As you come through the entrance, immediately on your right is the <span class="highlight">Ticket Office (Q15)</span>. In front of you is the car park, and on the left, next to the gate, is the <span class="highlight">Gift Shop (Q16)</span>.</p>
                <p>The large building at the top, facing the entrance, is the <span class="highlight">main Workshop (Q17)</span>. In the top right-hand corner is the <span class="highlight">Showroom (Q18)</span>.</p>
                <p>On one side of the Grinding Shop is the <span class="highlight">Cafe (Q19)</span>, where you can get drinks and snacks.</p>
                <p>Finally, the row of buildings on the left, near the river, are the <span class="highlight">cottages (Q20)</span>. These were built for the workers.</p>
            </div>
        `
    },

"3": {
        "title": "CAMBRIDGE 4 - TEST 3",
        "audio": "test3.mp3",
        "questionsHTML": `
            <style>
                .options-box { background-color: #e3f2fd; padding: 15px; border-radius: 8px; margin-bottom: 20px; font-weight: bold; line-height: 2; border: 1px solid #bbdefb; }
                .q-num { font-weight: bold; margin-right: 5px; font-size: 14px; background-color: #333; color: white; padding: 2px 6px; border-radius: 4px; }
                .input-box { padding: 5px 8px; border: 0; border-bottom: 2px dashed #666; background-color: transparent; width: 60px; font-size: 18px; color: #d32f2f; font-weight: bold; transition: 0.3s; text-align: center; text-transform: uppercase; outline: none; }
                .input-box:focus { border-bottom: 2px solid #2196F3; }
            </style>

            <div class="question-section">
                <h3>Questions 21–22</h3>
                <p style="color: #666; font-style: italic;">Choose the correct letter, <strong>A, B or C</strong>.</p>
                
                <p><span class="q-num">21</span> Melanie says she hasn't started the assignment as: <input type="text" id="q21" class="input-box" maxlength="1"></p>
                <p style="margin-left: 30px;">A. she was doing work for another course.<br>B. it was a really big assignment.<br>C. she hasn't spent time in the library.</p>

                <p><span class="q-num">22</span> The lecturer says that reasonable excuses for extensions are: <input type="text" id="q22" class="input-box" maxlength="1"></p>
                <p style="margin-left: 30px;">A. planning problems.<br>B. problems with assignment deadlines.<br>C. personal illness or accident.</p>
            </div>

            <div class="question-section">
                <h3>Questions 23–27</h3>
                <p style="color: #666; font-style: italic;">Dr Johnson’s recommendations. Choose <strong>A–G</strong>.</p>
                <div class="options-box">
                    A. must read | B. useful | C. limited value | D. read 1st section<br>
                    E. read research methods | F. read conclusion | G. don't read
                </div>
                <p>23. Jackson: <input type="text" id="q23" class="input-box" maxlength="1"> &nbsp;&nbsp;|&nbsp;&nbsp; 24. Roberts: <input type="text" id="q24" class="input-box" maxlength="1"></p>
                <p>25. Morris: <input type="text" id="q25" class="input-box" maxlength="1"> &nbsp;&nbsp;|&nbsp;&nbsp; 26. Cooper: <input type="text" id="q26" class="input-box" maxlength="1"></p>
                <p>27. Forster: <input type="text" id="q27" class="input-box" maxlength="1"></p>
            </div>

            <div class="question-section">
                <h3>Questions 28–30</h3>
                <p style="color: #666; font-style: italic;">Reasons for changing accommodation. Choose <strong>A–H</strong>.</p>
                <div class="options-box">
                    A. uncooperative landlord | B. environment | C. space | D. noisy neighbors<br>
                    E. near city | F. work location | G. transport | H. rent
                </div>
                <p>28. Bar 2: <input type="text" id="q28" class="input-box" maxlength="1"> &nbsp;&nbsp;|&nbsp;&nbsp; 29. Bar 4: <input type="text" id="q29" class="input-box" maxlength="1"> &nbsp;&nbsp;|&nbsp;&nbsp; 30. Bar 6: <input type="text" id="q30" class="input-box" maxlength="1"></p>
            </div>
        `,
        "answers": {
            "q21": "a", 
            "q22": "c", 
            "q23": "e", 
            "q24": "b", 
            "q25": "g", 
            "q26": "f", 
            "q27": "c", 
            "q28": "d", 
            "q29": "a", 
            "q30": "b"
        },
        "vocabulary": [
    { word: "Vacancy", type: "n", phonetic: "/ˈveɪ.kən.si/", meaning: "Vị trí trống, chỗ khuyết" },
    { word: "Qualification", type: "n", phonetic: "/ˌkwɒl.ɪ.fɪˈkeɪ.ʃən/", meaning: "Bằng cấp, năng lực chuyên môn" },
    { word: "Shift", type: "n", phonetic: "/ʃɪft/", meaning: "Ca làm việc (night shift, day shift)" },
    { word: "Candidate", type: "n", phonetic: "/ˈkæn.dɪ.dət/", meaning: "Ứng cử viên" },
    { word: "Requirement", type: "n", phonetic: "/rɪˈkwaɪə.mənt/", meaning: "Yêu cầu, điều kiện bắt buộc" }
],
        "transcript": `
            <div class="transcript-section" style="font-size: 15px; line-height: 1.6; color: #333;">
                <h4 style="color: #2e7d32; border-bottom: 2px solid #c5e1a5; padding-bottom: 10px;">Full Transcript: Population Studies Discussion</h4>
                <p><strong>Melanie:</strong> ... I'm having trouble getting hold of the books. I've been to the library several times, and all the books are out.</p>
                <p><strong>Dr Johnson:</strong> Sounds like you should have started earlier.</p>
                <p><strong>Melanie:</strong> Well, I had a really big assignment due in for another course, and <span class="highlight">I've been spending all my time on that (Q21)</span>.</p>
                <p><strong>Dr Johnson:</strong> ...extensions are normally given only for <span class="highlight">medical or compassionate reasons (Q22)</span>. We don't like giving them to students who didn't plan properly.</p>
                <hr style="border: 1px dashed #ccc; margin: 15px 0;">
                <p><strong>Dr Johnson:</strong> You should also read the article by Jackson, but just look at the part on the <span class="highlight">research methodology (Q23)</span>.</p>
                <p><strong>Dr Johnson:</strong> And if you have time, the one by Roberts <span class="highlight">says very relevant things (Q24)</span>, although it's not essential.</p>
                <p><strong>Melanie:</strong> OK, what about Morris?</p>
                <p><strong>Dr Johnson:</strong> <span class="highlight">I wouldn't bother with that (Q25)</span> at this stage.</p>
                <p><strong>Dr Johnson:</strong> For Cooper, just look at the last part where he discusses the <span class="highlight">research results (Q26)</span>.</p>
                <p><strong>Dr Johnson:</strong> Lastly, Forster... it's not bad and could be of some help, <span class="highlight">but not that much (Q27)</span>.</p>
                <hr style="border: 1px dashed #ccc; margin: 15px 0;">
                <p><strong>Dr Johnson:</strong> Now, the graph. Bar one is space. Bar two is to do with the people <span class="highlight">living nearby disturbing them (Q28)</span>.</p>
                <p><strong>Dr Johnson:</strong> Bar four refers to problems when the owner <span class="highlight">won't help fix things (Q29)</span>. The landlord is not helpful.</p>
                <p><strong>Dr Johnson:</strong> Bar six... People moving because they wanted to be in a more <span class="highlight">attractive neighbourhood (Q30)</span>.</p>
            </div>
        `
    },

    "4": {
        "title": "CAMBRIDGE 4 - TEST 4",
        "audio": "test4.mp3",
        "questionsHTML": `
            <div class="question-section">
                <h3>Questions 31–40</h3>
                <p style="color: #666; font-style: italic;">Fill the notes below. Write <strong>NO MORE THAN TWO WORDS</strong> for each answer.</p>
                
                <div style="text-align: center; font-weight: bold; margin-bottom: 15px; color: #1976D2;">THE URBAN LANDSCAPE</div>
                
                <p><strong>Two areas of focus:</strong></p>
                <ul>
                    <li>the effect of vegetation on the urban climate</li>
                    <li>ways of planning our <span class="q-num">31</span> <input type="text" id="q31" style="width: 150px;"> better</li>
                </ul>

                <p><strong>Large-scale impact of trees:</strong></p>
                <ul>
                    <li>they can make cities more or less <span class="q-num">32</span> <input type="text" id="q32" style="width: 100px;"></li>
                    <li>in summer they can make cities cooler</li>
                    <li>they can make inland cities more <span class="q-num">33</span> <input type="text" id="q33" style="width: 100px;"></li>
                </ul>

                <p><strong>Local impact of trees:</strong> they can make local areas</p>
                <ul style="list-style-type: none; padding-left: 20px; display: flex; flex-wrap: wrap;">
                    <li style="width: 50%;">– more <span class="q-num">34</span> <input type="text" id="q34" style="width: 120px;"></li>
                    <li style="width: 50%;">– cooler / less windy</li>
                    <li style="width: 50%;">– more humid</li>
                    <li style="width: 50%;">– less <span class="q-num">35</span> <input type="text" id="q35" style="width: 120px;"></li>
                </ul>

                <hr style="border: 0; border-top: 1px dashed #ccc; margin: 20px 0;">
                
                <p><strong>Temperature regulation:</strong> trees evaporate water through their <span class="q-num">36</span> <input type="text" id="q36" style="width: 100px;"></p>
                
                <p><strong>Wind force:</strong> tall buildings cause more wind at <span class="q-num">37</span> <input type="text" id="q37" style="width: 100px;"> level. Trees <span class="q-num">38</span> <input type="text" id="q38" style="width: 160px;"> the wind force.</p>

                <p><strong>Noise:</strong> <span class="q-num">39</span> <input type="text" id="q39" style="width: 100px;"> frequency noise passes through trees.</p>

                <p><strong>Important points:</strong> trees require sunlight, water and <span class="q-num">40</span> <input type="text" id="q40" style="width: 120px;"> to grow.</p>
            </div>
        `,
        "answers": {
            "q31": ["cities", "environment"], 
            "q32": "windy", 
            "q33": "humid", 
            "q34": ["shady", "shaded"], 
            "q35": "dangerous",
            "q36": "leaves", 
            "q37": "ground", 
            "q38": ["filter", "reduce", "considerably reduce"], 
            "q39": "low", 
            "q40": ["space", "room"]
        },
        "vocabulary": [
    { word: "Prescription", type: "n", phonetic: "/prɪˈskrɪp.ʃən/", meaning: "Đơn thuốc" },
    { word: "Symptom", type: "n", phonetic: "/ˈsɪmp.təm/", meaning: "Triệu chứng" },
    { word: "Nutrition", type: "n", phonetic: "/njuːˈtrɪʃ.ən/", meaning: "Dinh dưỡng" },
    { word: "Facility", type: "n", phonetic: "/fəˈsɪl.ə.ti/", meaning: "Cơ sở vật chất (thường số nhiều: facilities)" },
    { word: "Therapy", type: "n", phonetic: "/ˈθer.ə.pi/", meaning: "Phương pháp trị liệu" }
],
        "transcript": `
            <div class="transcript-section" style="font-size: 15px; line-height: 1.6; color: #333;">
                <h4 style="color: #2e7d32; border-bottom: 2px solid #c5e1a5; padding-bottom: 10px;">Full Transcript: The Urban Landscape</h4>
                <p><strong>Lecturer:</strong> Good day, ladies and gentlemen. I have been asked today to talk to you about the urban landscape. There are two major areas that I will focus on in my talk: how vegetation can have a significant effect on urban climate, and how we can better plan our <span class="highlight">cities (Q31)</span> (or environment) using trees to provide a more comfortable environment for us to live in.</p>
                <p>Trees can have a significant impact on our cities. They can make a city as a whole a bit less <span class="highlight">windy (Q32)</span> or a bit more windy, if that’s what you want. They can make it a bit cooler if it’s a hot summer day in an Australian city, or they can make it a bit more <span class="highlight">humid (Q33)</span> if it’s a dry inland city. On the local scale – that is, in particular areas within the city – trees can make the local area more <span class="highlight">shady (Q34)</span> (or shaded), cooler, more humid and much less windy. In fact trees and planting of various kinds can be used to make city streets actually less <span class="highlight">dangerous (Q35)</span> in particular areas.</p>
                <p>How do trees do all that, you ask? Well, the main difference between a tree and a building is a tree has got an internal mechanism to keep the temperature regulated. It evaporates water through its <span class="highlight">leaves (Q36)</span> and that means that the temperature of the leaves is never very far from our own body temperature. The temperature of a building surface on a hot sunny day can easily be twenty degrees more than our temperature. Trees, on the other hand, remain cooler than buildings because they sweat. This means that they can humidify the air and cool it – a property which can be exploited to improve the local climate.</p>
                <p>Trees can also help break the force of winds. The reason that high buildings make it windier at <span class="highlight">ground (Q37)</span> level is that, as the wind goes higher and higher, it goes faster and faster. When the wind hits the building, it has to go somewhere. Some of it goes over the top and some goes around the sides of the building, forcing those high-level winds down to ground level. That doesn't happen when you have trees. Trees <span class="highlight">filter (Q38)</span> (or reduce) the wind and considerably <span class="highlight">reduce (Q38)</span> it, preventing those very large strong gusts that you so often find around tall buildings.</p>
                <p>Another problem in built-up areas is that traffic noise is intensified by tall buildings. By planting a belt of trees at the side of the road, you can make things a little quieter, but much of the vehicle noise still goes through the trees. Trees can also help reduce the amount of noise in the surroundings, although the effect is not as large as people like to think. <span class="highlight">low (Q39)</span>-frequency noise, in particular, just goes through the trees as though they aren't there.</p>
                <p>Although trees can significantly improve the local climate, they do however take up a lot of space. There are root systems to consider and branches blocking windows and so on. It may therefore be difficult to fit trees into the local landscape. There is not a great deal you can do if you have what we call a street canyon – a whole set of high-rises enclosed in a narrow street. Trees need water to grow. They also need some sunlight to grow and you need <span class="highlight">space (Q40)</span> (or room) to put them. If you have the chance of knocking buildings down and replacing them, then suddenly you can start looking at different ways to design the streets and to introduce...</p>
            </div>
        `
    },

    "5": {
        "title": "CAMBRIDGE 4 - TEST 5",
        "audio": "test5.mp3",
        "questionsHTML": `
            <style>
                .mcq-option { margin: 8px 0; display: block; cursor: pointer; padding-left: 10px; }
                .input-box { padding: 2px 8px; border: none; border-bottom: 1px dashed #000; background-color: transparent; outline: none; width: 180px; font-size: 16px; font-weight: bold; color: #d32f2f; font-family: inherit; }
                .input-box:focus { border-bottom: 2px solid #1976D2; }
                .q-title { font-weight: bold; font-style: italic; font-size: 18px; margin-bottom: 5px; }
                .instruction { font-style: italic; margin-bottom: 15px; }
                .example-box { background: linear-gradient(to bottom, #f5f5f5, #e0e0e0); border: 1px solid #aaa; padding: 15px; margin-bottom: 25px; box-shadow: 2px 2px 5px rgba(0,0,0,0.1); }
            </style>

            <h2 style="margin-top: 0; font-size: 22px;">TEST 2</h2>
            
            <div class="question-section">
                <div class="q-title">Questions 1–5</div>
                <div class="instruction">Choose the correct letter, A, B or C.</div>
                
                <div class="example-box">
                    <div style="font-style: italic; margin-bottom: 5px;">Example</div>
                    <div>How long has Sally been waiting?</div>
                    <div style="margin-left: 20px; margin-top: 5px;">
                        A five minutes<br>
                        B twenty minutes<br>
                        <u><strong>C</strong></u> thirty minutes
                    </div>
                </div>

                <p><strong>1</strong> What does Peter want to drink?</p>
                <label class="mcq-option"><input type="radio" name="q1" value="A"> A tea</label>
                <label class="mcq-option"><input type="radio" name="q1" value="B"> B coffee</label>
                <label class="mcq-option"><input type="radio" name="q1" value="C"> C a cold drink</label>

                <p><strong>2</strong> What caused Peter problems at the bank?</p>
                <label class="mcq-option"><input type="radio" name="q2" value="A"> A The exchange rate was down.</label>
                <label class="mcq-option"><input type="radio" name="q2" value="B"> B He was late.</label>
                <label class="mcq-option"><input type="radio" name="q2" value="C"> C The computers weren't working.</label>

                <p><strong>3</strong> Who did Peter talk to at the bank?</p>
                <label class="mcq-option"><input type="radio" name="q3" value="A"> A an old friend</label>
                <label class="mcq-option"><input type="radio" name="q3" value="B"> B an American man</label>
                <label class="mcq-option"><input type="radio" name="q3" value="C"> C a German man</label>

                <p><strong>4</strong> Henry gave Peter a map of</p>
                <label class="mcq-option"><input type="radio" name="q4" value="A"> A the city.</label>
                <label class="mcq-option"><input type="radio" name="q4" value="B"> B the bus routes.</label>
                <label class="mcq-option"><input type="radio" name="q4" value="C"> C the train system.</label>

                <p><strong>5</strong> What do Peter and Sally decide to order?</p>
                <label class="mcq-option"><input type="radio" name="q5" value="A"> A food and drinks</label>
                <label class="mcq-option"><input type="radio" name="q5" value="B"> B just food</label>
                <label class="mcq-option"><input type="radio" name="q5" value="C"> C just drinks</label>
            </div>

            <div class="question-section" style="margin-top: 30px;">
                <div class="q-title">Questions 6–8</div>
                <div class="instruction">Complete the notes below using words from the box.</div>
                
                <div style="text-align: center; margin: 20px 0;">
                    <div style="border: 1px solid #000; display: inline-block; padding: 15px 50px; text-align: left; font-size: 16px; line-height: 1.6; background-color: #fff;">
                        Art Gallery<br>
                        Cathedral<br>
                        Castle<br>
                        Gardens<br>
                        Markets
                    </div>
                </div>

                <p>Tourist attractions open all day: <strong>6</strong> <input type="text" id="q6" class="input-box"> and Gardens</p>
                <p>Tourist attractions NOT open on Mondays: <strong>7</strong> <input type="text" id="q7" class="input-box"> and Castle</p>
                <p>Tourist attractions which have free entry: <strong>8</strong> <input type="text" id="q8" class="input-box"> and Markets</p>
            </div>

            <div class="question-section" style="margin-top: 30px;">
                <div class="q-title">Questions 9 and 10</div>
                <div class="instruction">Complete the sentences below.<br>Write <strong>NO MORE THAN THREE WORDS</strong> for each answer.</div>
                
                <p><strong>9</strong> The first place Peter and Sally will visit is the <input type="text" id="q9" class="input-box" style="width: 250px;"></p>
                <p><strong>10</strong> At the Cathedral, Peter really wants to <input type="text" id="q10" class="input-box" style="width: 250px;"></p>
            </div>
        `,
        "answers": {
            "q1": "C", 
            "q2": "C", 
            "q3": "B", 
            "q4": "B", 
            "q5": "A",
            "q6": "cathedral", 
            "q7": "markets", 
            "q8": "gardens", 
            "q9": ["arts gallery", "art gallery", "rembrandt"], 
            "q10": ["climb the tower", "see the view"]
        },
        "vocabulary": [
    { word: "Exhibition", type: "n", phonetic: "/ˌek.sɪˈbɪʃ.ən/", meaning: "Cuộc triển lãm" },
    { word: "Sculpture", type: "n", phonetic: "/ˈskʌlp.tʃər/", meaning: "Bức tượng điêu khắc" },
    { word: "Gallery", type: "n", phonetic: "/ˈɡæl.ər.i/", meaning: "Phòng trưng bày nghệ thuật" },
    { word: "Artifact", type: "n", phonetic: "/ˈɑː.tɪ.fækt/", meaning: "Cổ vật, hiện vật lịch sử" },
    { word: "Contemporary", type: "adj", phonetic: "/kənˈtem.pər.ər.i/", meaning: "Đương đại, cùng thời" }
],
        "transcript": `
            <div class="transcript-section" style="font-size: 15px; line-height: 1.6; color: #333;">
                <p><strong>Sally:</strong> Oh, Peter, there you are. You've been ages. What kept you so long?</p>
                <p><strong>Peter:</strong> I'm sorry I'm so late, Sally. Have you been waiting long?</p>
                <p><strong>Sally:</strong> Oh, half an hour. But it doesn't matter. I've had a coffee and I've been reading this guidebook for tourists. Sit down. You look very hot and tired. What would you like to drink?</p>
                <p><strong>Peter:</strong> I'd love a really <span class="highlight">chilled mineral water (Q1)</span> or something. Will you have another coffee?</p>
                <p><strong>Sally:</strong> Yes, I will. The waitress will be back in a moment. Why were you so late? Did something happen?</p>
                <p><strong>Peter:</strong> Yes. You know I went to the bank to cash some travellers' cheques? Well, the exchange rate was looking healthy, but when I went to the teller, they told me the <span class="highlight">computer system was temporarily down (Q2)</span>, so they couldn't do any transactions. They said the problem would be fixed in a few minutes, so I waited. And then I started talking to another guy in the bank, and I forgot the time.</p>
                <p><strong>Sally:</strong> Really? Someone you met in the bank? Does he work there?</p>
                <p><strong>Peter:</strong> No, he was a tourist, <span class="highlight">from New York (Q3)</span>. His name's Henry, and he's been here for a week, but he's moving on to Germany tomorrow. He's an architect, and he's spending four weeks travelling around Europe.</p>
                <p><strong>Sally:</strong> Just like us!</p>
                <p><strong>Peter:</strong> Yeah, just like us. He told me the names of some places where we should eat. Great food, and not too expensive, he said. Oh, and he also gave me this <span class="highlight">map of the bus system (Q4)</span>. He said he didn't need it anymore.</p>
                <p><strong>Sally:</strong> That's useful. Pity he's moving on tomorrow. Ah, here's the waitress. Let's order. Do you want anything to eat, or shall we just have a drink?</p>
                <p><strong>Peter:</strong> Well, I'm hungry, and we've got a lot of sightseeing to do. So let's just have a <span class="highlight">snack and a drink (Q5)</span>.</p>
                <p><strong>Sally:</strong> Sounds good to me!</p>
                <p style="text-align: center; color: #666;"><em>(Pause)</em></p>
                <p><strong>Peter:</strong> Well, let's decide what we'll see today. I guess the best place to start is the Cathedral, and then the Castle. What are the opening times for those two?</p>
                <p><strong>Sally:</strong> Well, according to this guidebook, the Cathedral is only open from 9.30 in the morning until midday. Oh, no, hang on. That's the Cathedral Museum. The <span class="highlight">Cathedral itself is open morning and afternoon (Q6)</span>. The Castle is just open from one to five, so we can't go there until after lunch.</p>
                <p><strong>Peter:</strong> I really want to spend some time in the Art Gallery, because they've got this wonderful painting by Rembrandt that I've always wanted to see.</p>
                <p><strong>Sally:</strong> What else should we see?</p>
                <p><strong>Peter:</strong> Well, the guidebook says the Botanical Gardens are worth spending some time in, and they're open all day, from eight to six, so we can go there anytime.</p>
                <p><strong>Sally:</strong> I'd like to go to the markets near the river too, but... oh, no, wait, that's only in the mornings, too.</p>
                <p><strong>Peter:</strong> As well as today and tomorrow, we can see some other places on Monday, you know. But I don't think the markets will be open then. They <span class="highlight">only open on Thursdays (Q7)</span>. So we've missed them for this week.</p>
                <p><strong>Sally:</strong> Maybe we should go to the Cathedral today because it's Sunday tomorrow, and even though it's open every day, it might be more difficult to get in tomorrow because of the church services.</p>
                <p><strong>Peter:</strong> That's true. But the Art Gallery isn't open on Sundays at all, so we'll have to go there today. The <span class="highlight">Castle's open every day except Mondays (Q7)</span>, so we're OK there.</p>
                <p><strong>Sally:</strong> Are all these places free?</p>
                <p><strong>Peter:</strong> I think there's a charge for all of them, except the <span class="highlight">Botanical Gardens (Q8)</span>. Oh, and the <span class="highlight">markets, of course you don't pay (Q8)</span> to go in.</p>
                <p><strong>Sally:</strong> OK. Well, it looks like our plan is this. We'll go to see the painting you like first, the <span class="highlight">Rembrandt (Q9)</span> (Art Gallery), then have lunch and go on to the Castle after that. And then the Cathedral.</p>
                <p><strong>Peter:</strong> OK. It says here that the roof of the Cathedral is really beautiful. Is that right?</p>
                <p><strong>Sally:</strong> What I really want to do at the Cathedral is <span class="highlight">climb the tower (Q10)</span>. The <span class="highlight">view (Q10)</span> is supposed to be spectacular.</p>
                <p><strong>Peter:</strong> OK, well, that'll be more than enough for today. Then tomorrow, let's go to the Botanical Gardens and have a picnic.</p>
                <p><strong>Sally:</strong> I want to sit by the river and watch the swans. This city's famous for them.</p>
            </div>
        `
    },

    "6": {
        "title": "CAMBRIDE 2 - Test 6",
        "audio": "test6.mp3",
        "questionsHTML": `
            <style>
                .mcq-option { margin: 8px 0; display: block; cursor: pointer; padding-left: 10px; line-height: 1.6; }
                .q-title { font-weight: bold; font-size: 16px; margin-bottom: 5px; margin-top: 25px; color: #1976D2;}
                .instruction { font-style: italic; margin-bottom: 20px; color: #666; font-size: 15px;}
            </style>

            <div class="question-section">
                <h3 style="text-transform: uppercase; border-bottom: 2px solid #e0e0e0; padding-bottom: 10px;">Questions 11–20</h3>
                <div class="instruction">Choose the correct letter, <strong>A, B or C</strong>.</div>

                <div class="q-title">11 The Counselling Service may contact tutors if</div>
                <label class="mcq-option"><input type="radio" name="q11" value="A"> A they are too slow in marking assignments.</label>
                <label class="mcq-option"><input type="radio" name="q11" value="B"> B they give students a lot of work.</label>
                <label class="mcq-option"><input type="radio" name="q11" value="C"> C they don't inform students about their progress.</label>

                <div class="q-title">12 Stress may be caused by</div>
                <label class="mcq-option"><input type="radio" name="q12" value="A"> A new teachers.</label>
                <label class="mcq-option"><input type="radio" name="q12" value="B"> B time pressure.</label>
                <label class="mcq-option"><input type="radio" name="q12" value="C"> C unfamiliar subject matter.</label>

                <div class="q-title">13 International students may find stress difficult to handle because</div>
                <label class="mcq-option"><input type="radio" name="q13" value="A"> A they lack support from family and friends</label>
                <label class="mcq-option"><input type="radio" name="q13" value="B"> B they don't have time to make new friends.</label>
                <label class="mcq-option"><input type="radio" name="q13" value="C"> C they find it difficult to socialise.</label>

                <div class="q-title">14 A personal crisis may be caused by</div>
                <label class="mcq-option"><input type="radio" name="q14" value="A"> A studying for too long overseas.</label>
                <label class="mcq-option"><input type="radio" name="q14" value="B"> B business problems in the student's own country.</label>
                <label class="mcq-option"><input type="radio" name="q14" value="C"> C disruptions to personal relationships.</label>

                <div class="q-title">15 Students may lose self-esteem if</div>
                <label class="mcq-option"><input type="radio" name="q15" value="A"> A they have to change courses.</label>
                <label class="mcq-option"><input type="radio" name="q15" value="B"> B they don't complete a course.</label>
                <label class="mcq-option"><input type="radio" name="q15" value="C"> C their family puts too much pressure on them.</label>

                <div class="q-title">16 Students should consult Glenda Roberts if</div>
                <label class="mcq-option"><input type="radio" name="q16" value="A"> A their general health is poor.</label>
                <label class="mcq-option"><input type="radio" name="q16" value="B"> B their diet is too strict.</label>
                <label class="mcq-option"><input type="radio" name="q16" value="C"> C they can't eat the local food.</label>

                <div class="q-title">17 Students in financial difficulties can receive</div>
                <label class="mcq-option"><input type="radio" name="q17" value="A"> A assistance to buy books.</label>
                <label class="mcq-option"><input type="radio" name="q17" value="B"> B a loan to pay their course fees.</label>
                <label class="mcq-option"><input type="radio" name="q17" value="C"> C a no-interest loan to cover study expenses.</label>

                <div class="q-title">18 Loans are also available to students who</div>
                <label class="mcq-option"><input type="radio" name="q18" value="A"> A can't pay their rent.</label>
                <label class="mcq-option"><input type="radio" name="q18" value="B"> B need to buy furniture.</label>
                <label class="mcq-option"><input type="radio" name="q18" value="C"> C can't cover their living expenses.</label>

                <div class="q-title">19 The number of students counselled by the service last year was</div>
                <label class="mcq-option"><input type="radio" name="q19" value="A"> A 214.</label>
                <label class="mcq-option"><input type="radio" name="q19" value="B"> B 240.</label>
                <label class="mcq-option"><input type="radio" name="q19" value="C"> C 2,600.</label>

                <div class="q-title">20 The speaker thinks the Counselling Service</div>
                <label class="mcq-option"><input type="radio" name="q20" value="A"> A has been effective in spite of staff shortages.</label>
                <label class="mcq-option"><input type="radio" name="q20" value="B"> B is under-used by students.</label>
                <label class="mcq-option"><input type="radio" name="q20" value="C"> C has suffered badly because of staff cuts.</label>
            </div>
        `,
        "answers": {
            "q11": "C", 
            "q12": "B", 
            "q13": "A", 
            "q14": "C", 
            "q15": "B",
            "q16": "C", 
            "q17": "A", 
            "q18": "B", 
            "q19": "B", 
            "q20": "A"
        },
        "vocabulary": [
    { word: "Council", type: "n", phonetic: "/ˈkaʊn.səl/", meaning: "Hội đồng (thành phố/địa phương)" },
    { word: "Renovation", type: "n", phonetic: "/ˌren.əˈveɪ.ʃən/", meaning: "Sự cải tạo, nâng cấp (công trình)" },
    { word: "Pedestrian", type: "n", phonetic: "/pəˈdes.tri.ən/", meaning: "Người đi bộ" },
    { word: "Recreation", type: "n", phonetic: "/ˌrek.riˈeɪ.ʃən/", meaning: "Sự giải trí, tiêu khiển" },
    { word: "Resident", type: "n", phonetic: "/ˈrez.ɪ.dənt/", meaning: "Cư dân (sống tại một khu vực)" }
],
        "transcript": `
            <div class="transcript-section" style="font-size: 15px; line-height: 1.8; color: #333;">
                <h4 style="color: #2e7d32; border-bottom: 2px solid #c5e1a5; padding-bottom: 10px;">Full Transcript: The Counselling Service</h4>
                
                <p><strong>Counsellor:</strong> So, the counselling services we offer deal with any problems arising from your studies, or in your life outside the university. Let's take academic counselling. If you're confused about subjects or how to combine them in your degree, then we can advise you and discuss the career you are aiming for, so that you can see it all in context. We can also <span class="highlight">chase up your tutor if you're not getting proper feedback on how you are getting on (Q11)</span> in your subject.</p>
                
                <p>Besides help with academic problems, you may also need personal counselling. If you think you're already under stress, well, just wait till classes begin next week. You'll have to start adjusting to teaching and learning methods that may be unfamiliar to you, as well as the <span class="highlight">mounting pressure as the deadline (Q12)</span> for that first assignment creeps up on you. And of course, you have to cope with all this without your usual social network. You know, the <span class="highlight">social contacts, family and friends you could normally rely on (Q13)</span> for help. All of this causes anxiety.</p>
                
                <p>Studying overseas can trigger a personal crisis. You may have left a lot of what you might call 'unfinished business' back in your own country, or you may have <span class="highlight">interrupted personal relationships, or even sometimes have broken them off (Q14)</span> to come overseas. And so the student often feels lonely, unhappy, unmotivated and unable to concentrate on studying. Or there may be other things bothering you. Our resident chaplain can offer you spiritual guidance if that's what you want, or we can put you in touch with community groups that can provide you with social contacts and friendship.</p>
                
                <p>What about exam stress? It affects nearly everyone to some extent, but especially overseas students like yourselves. There may be a huge amount of family pressure on you to succeed. And if you <span class="highlight">fail a subject or drop out of a course (Q15)</span> because it's too difficult then your self-esteem can suffer. But it's not the end of the world if you don't pass an exam. I had to resit First Year Anthropology, so I can certainly offer you a sympathetic ear! Anyway, exam failure can lead to worrying changes in the way you normally behave. You may also be off your food, or you may have <span class="highlight">dietary problems because the local food is not to your liking (Q16)</span> and upsets you, and this can affect your health and studies. Glenda Roberts is our dietician in the Health Service and we can put you on to her.</p>
                
                <p>And we all have money problems, don't we? But remember, full-time students can get a <span class="highlight">low-interest loan of up to six hundred dollars to buy books (Q17)</span> and for similar study-related expenses. That's right, and you can get double that amount if you can't afford an item of equipment you need for your course - a musical instrument, for example. And it doesn't stop there. When you move into a flat, <span class="highlight">starting-up expenses, including furniture for it, can be covered by a loan (Q18)</span> through the Welfare Service - see Jill Freeman for details.</p>
                
                <p>Can we help you? Well, last academic year, in spite of staff cuts, we <span class="highlight">counselled 240 (Q19)</span> international students for a total of 2600 hours counselling. And finally we won all but just one of the 12 appeals that we launched on behalf of students. <span class="highlight">Not too bad for an understaffed service (Q20)</span>, don't you think? That's all from me. Thank you.</p>
            </div>
        `
    }
};