import ImageCirBackend from "../assets/cir-backend.jpg"
import ImageCirReact from "../assets/cir-react.jpg"
import ImageCirDevLab from "../assets/cir-dev-lab.PNG"
import ImageCirNetwork from "../assets/cir-network.jpg"
import ImageCirSCADA from "../assets/cir-wonderware.PNG"
import ImageCirThin from "../assets/cir-thin.PNG"

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
        "Course: Pro JavaScript Backend Developer", 
        ImageCirBackend, 
        "Learn about many backend tricks & bulit the eCommerse project.", 
        "2022-10-18"
        ),
    new cirtification(
        "Course: React Workshop", 
        ImageCirReact, 
        "Learn about many frontend tricks & built many projects.", 
        "2022-10-12"
        ),
    new cirtification(
        "Slove: DevLab3", 
        ImageCirDevLab, 
        "Online algorithms problem solving.", 
        "2022-07-31"
        ),
    new cirtification(
        "Course: Pre-CCNA", 
        ImageCirNetwork, 
        "Pre-CCNA networking course.", 
        "2020-01-16"
        ),
    new cirtification(
        "Slove: Wonderware Exam", 
        ImageCirSCADA, 
        "Wonderware Intouch CSI exam.", 
        "2019-04-01"
        ),
    new cirtification(
        "Slove: Thin Lab", 
        ImageCirThin, 
        "Microsoft ThinManager for automation system integration.", 
        "2019-03-22"
        ),
]