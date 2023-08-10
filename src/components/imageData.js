import p1 from "../assets/api-result.png"
import p2 from "../assets/report-after.png"
import p3 from "../assets/report-before.png"
import p4 from "../assets/report-result.png"

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
        "Alerted devices API result.", 
        p1, 
        "Alerted devices API result.", 
        "2022-10-18"
        ),
    new cirtification(
        "Report downloading before optimize runtime (45 days data size projection on InfluxDB).", 
        p3, 
        "Report downloading before optimize runtime (45 days data size projection on InfluxDB).", 
        "2022-10-19"
        ),
    new cirtification(
        "Report downloading after optimize runtime (45 days data size projection on InfluxDB).", 
        p2, 
        "Report downloading after optimize runtime (45 days data size projection on InfluxDB).", 
        "2022-10-20"
        ),
    new cirtification(
        "Report result", 
        p4, 
        "Report result", 
        "2022-10-21"
        ),
]