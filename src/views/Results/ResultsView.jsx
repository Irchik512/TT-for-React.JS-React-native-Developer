import Notification from "components/Notification/Notification";
import Sections from "components/Section/Section";

export default function ResultsView() {
return(
    <Sections title = {'You test history'}>
        <Notification>
            This will be  a history of your tests
        </Notification>
    </Sections>
);
};