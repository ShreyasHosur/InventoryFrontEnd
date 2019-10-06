const mapping = {
    'One day':'days',
    'Last week':'weeks',
    'Last Month': 'months',
    'Last Year':'years'
};

let period = {
    'days':0,
    'weeks':0,
    'months':0,
    'years':0
};

export const getPeriod = selectedValue => {
     return {
       ...period,
      [mapping[selectedValue]]:1
     }
}