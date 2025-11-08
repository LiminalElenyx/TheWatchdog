console.log("The Watchdog is listening 🐶");

const topics=[
    "Barrel fields and rickhouses",
    "Construction and traffic",
    "Environmental hazards and Quality Reports",
    "Impact on neighbors and community",
    "Updates on permits and zoning"];

    function listTopics(topicArray) {
        let message= "Topics you can follow:\n";

        for (let i = 0; i < topicArray.length; i++) {
            message += "- " + topicArray[i]+ "\n";

        }

        return message;
    }

    console.log(listTopics(topics));

    const exampleSubscriber = {
    email: "anon@example.com",
    topics: ["Environtmental hazards and Quality Reports", "Impact on neighbors and community"],
    frequency: "weekly"
    };

console.log("Example subscriber:", exampleSubscriber);
