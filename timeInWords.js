function timeInWords(h, m) {
    const hours = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve"]
    const mins = [
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
        "twenty",
        "twenty one",
        "twenty two",
        "twenty three",
        "twenty four",
        "twenty five",
        "twenty six",
        "twenty seven",
        "twenty eight",
        "twenty nine"]
    if (m == 0) {
        return hours[h - 1] + ` o'` + ` clock`
    } else if (m == 15) {
        return "quarter past " + hours[h - 1]
    } else if (m == 30) {
        return "half past " + hours[h - 1]
    } else if (m == 45) {
        return "quarter to " + hours[h]
    } else if (m == 1) {
        return mins[m - 1] + " minute past " + hours[h - 1]
    } else if (m == 59) {
        return mins[(60 - m) - 1] + " minute to " + hours[h]
    } else if (m < 30) {
        return mins[m - 1] + " minutes past " + hours[h - 1]
    } else if (m > 30) {
        return mins[(60 - m) - 1] + " minutes to " + hours[h]
    }

}
