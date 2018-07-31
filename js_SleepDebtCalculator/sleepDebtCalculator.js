const getSleepHours = (day) => {
  switch (day) {
    case 'monday':
      return 7;
    case 'tuesday':
      return 7;
    case 'wednesday':
       return 7;
    case 'thursday':
       return 7;
    case 'friday':
       return 7;
    case 'saturday':
       return 9;
    case 'sunday':
       return 8.5;
	};
};

const getActualSleepHours = () => {
  return getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday');
};

const getIdealSleepHours = (idealHours) => {
  return idealHours * 7;
};

const calculateSleepDebt = () => {
  let actualSleepHours = getActualSleepHours();
  let idealSleepHours = getIdealSleepHours(8.5);
  if (actualSleepHours === idealSleepHours) {
    console.log('You have got the perfect amount of sleep!');
  } else if (actualSleepHours > idealSleepHours) {
    console.log(`You got ${actualSLeepHours - idealSleepHours} hour(s) more sleep than you needed this week. Get out of the bed already!`);
  } else {
    console.log(`You got ${idealSleepHours - actualSleepHours} hour(s) less sleep than you needed this week. You should really get some rest!`);
  };
};

calculateSleepDebt();