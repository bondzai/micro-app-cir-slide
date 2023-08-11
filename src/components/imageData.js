import p1 from "../assets/report.png"

class cirtification {
    constructor(name, image, description, date) {
        this.name = name;
        this.image = image;
        this.description = description;
        this.date = date;
    }
}

export const ImageData = [
    new cirtification(
        "", 
        p1, 
        "Fix: device status & battery logic", 
        "2022-10-18"
        ),
]
