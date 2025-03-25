import { FileTabs } from "../components/FileTabs";

export default {
    title: 'Components/FileTabs', 
    component: FileTabs, 
    render: ({...args }) => (
        <div style={{height: "50px"}}>
            <FileTabs {...args} />
        </div>
    ),
};

export const Tabs = {
    args: { tabs: ["main.py", "CollectVariables.py", "injector.py"]}
}   
