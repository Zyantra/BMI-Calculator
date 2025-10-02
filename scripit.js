  const heightInput = document.getElementById('height');
  const weightInput = document.getElementById('weight');
  const heightUnit = document.getElementById('heightoptions');
  const weightUnit = document.getElementById('weighingoption');
  const calculateBtn = document.getElementById('btn');
  const bmiDisplay = document.querySelector('#BMI h3');
  const categoryDisplay = document.querySelector("#category h3");
  const clear = document.querySelector("#clear");
  let tips = document.querySelector("#Tips");
  let footPannel = document.querySelector("#topbutton");


  calculateBtn.addEventListener('click', function () {
    let height = parseFloat(heightInput.value);
    let weight = parseFloat(weightInput.value);
    let hUnit = heightUnit.value;
    let wUnit = weightUnit.value;

    // Convert height to meters
    if (hUnit === 'Inches') {
      height = height * 0.0254;
    } else {
      height = height/100;
    };
     // 'Meter' requires no conversion

    // Convert weight to kilograms
    if (wUnit === 'Pounds') {
      weight = weight * 0.453592;
    } // 'Kilogram' requires no conversion

    // function for Categories..
    function underweight () {
      categoryDisplay.textContent = `Category = "Underweight"`;
      tips.innerHTML = `<h1>🧠BMI-Based Health Tips</h1>
                        <br>
                       <h2>Underweight (BMI ≤ 18.4)</h2>
            <br>  
            <b>Goal:</b> Gain weight safely and build strength.
            <br>
            🥗 <b>Eat nutrient-dense meals:</b>  Include healthy fats (nuts, seeds, avocado), lean proteins, and whole grains.
            <br>
            🏋<b> Strength training:</b> Build muscle mass with resistance exercises.
            <br>
            🧘 <b>Monitor energy levels:</b> Fatigue may signal nutrient deficiencies—consider B12, iron, and calcium checks.
            <br>
            🩺 <b>Consult a doctor:</b>Rule out underlying conditions like thyroid issues or malabsorption.
            <br>`;
    };

    function normal () {
      categoryDisplay.textContent = `Category = "Normal"`;
      tips.innerHTML = `<h1>🧠BMI-Based Health Tips</h1>
              <br>
              <h2>Normal Weight (BMI 18.5–24.9)</h2>  
              <br>
              <b>Goal:</b> Maintain balance and prevent future risks.
              <br>
              🥦<b>Stick to whole foods:</b> Prioritize vegetables, fruits, lean proteins, and complex carbs.
              <br>
              🚶<b>Stay active:</b> Aim for 150 minutes of moderate exercise weekly.
              <br>
              🧠<b>Mental wellness:</b> Include stress-reducing rituals like journaling, meditation, or nature walks.
              <br>
              🔄<b>Routine checkups:</b> Keep tabs on blood pressure, cholesterol, and glucose levels.
              <br>`;

    };

    function overweight () {
      categoryDisplay.textContent = `Category = "Overweight"`;
      tips.innerHTML = `<h1>🧠BMI-Based Health Tips</h1>
          <br>
              <h2>Overweight (BMI 25–29.9)</h2>  
              <br>
              <b>Goal:</b> Reduce weight gradually and improve metabolic health.
              <br>
              🍽<b>Portion control:</b> Use smaller plates, mindful eating, and avoid late-night snacking.
              <br>
              <b>🏃Increase movement:</b> Brisk walking, swimming, or cycling—start with 30 minutes daily.
              <br>
              <b>🧃Limit sugar and refined carbs:</b> Swap soda for water, white bread for whole grain.
              <br>
              🧪<b>Track progress:</b> Use a journal or app to monitor weight, mood, and habits.
              <br>`;
    }
    function obese(){
      categoryDisplay.textContent = `Category = "Obese"`;
      tips.innerHTML = `<h1>🧠BMI-Based Health Tips</h1>
                <br>
              <h2>Obese (BMI ≥ 30)</h2>
              <br> 
              <b>Goal:</b> Prioritize long-term health and reduce risk factors.
              <br>
              🥗<b>Structured meal plans:</b> Consider professional guidance for calorie control and nutrient balance.
              <br>
              🧘‍♂<b>Low-impact exercise:</b> Begin with walking, water aerobics, or chair yoga to avoid joint strain.
              <br>
              🧠<b>Behavioral support:</b> Cognitive-behavioral therapy or group coaching can help with emotional eating.
              <br>
              🩺<b>Medical evaluation:</b> Screen for diabetes, hypertension, and sleep apnea.
              <br>`;
    }

   // Calculate BMI
    if (height > 0 && weight > 0) {
      const bmi = weight / (height * height);
      bmiDisplay.textContent = `BMI = ${bmi.toFixed(2)}`;
      if(bmi <= 18.4) {
        underweight();
      }else if (bmi >= 18.5 && bmi <= 24.9) {
        normal();
      }else if (bmi >= 25 && bmi <= 29.9) {
        overweight();
      }else if (bmi >= 30 && bmi <= 50) {
        obese();
      }
    } else {
      bmiDisplay.textContent = 'BMI = Invalid input';
    }
  });
  clear.addEventListener('click', function(){
    location.reload();
  }); 

  footPannel.addEventListener('click', function(){
    window.scrollTo({ top : 0, behavior: "smooth"});
  })



