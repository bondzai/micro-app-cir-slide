import CodeCalPIR from "../assets/code-cal-pir.png"
import CodeCalMagnetic from "../assets/code-cal-magnetic.png"
import CodeReport from "../assets/code-report.png"
import Influx from "../assets/influx.png"
import InfluxTask from "../assets/influx-task.png"

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
        "Code: PIR sensor calculation logic", 
        CodeCalPIR, 
        "Code: PIR sensor calculation logic.", 
        "2022-10-18"
        ),
    new cirtification(
        "Code: Magnetic sensor calculation logic", 
        CodeCalMagnetic, 
        "Code: Magnetic sensor calculation logic.", 
        "2022-10-19"
        ),
    new cirtification(
        "Code: Report logic for Celery worker", 
        CodeReport, 
        "Code: Report logic for Celery worker.", 
        "2022-10-12"
        ),
    new cirtification(
        "Flux task", 
        InfluxTask, 
        "Flux task woker", 
        "2022-07-31"
        ),
    new cirtification(
        "Influx data", 
        Influx, 
        "Influx data", 
        "2020-01-16"
        ),
]