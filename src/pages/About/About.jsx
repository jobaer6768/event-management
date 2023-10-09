

const About = () => {
    return (
        <div className="flex justify-center items-center h-[70vh]">
            <div className="space-y-8 text-center py-10 px-6">
                <h1 className="text-2xl md:text-6xl font-bold"><span className="text-orange-400">Hello!</span> We Are an Event Planning Agency</h1>
                <p className="mt-2 opacity-60">As the premier event planning company in the area, we know that it’s not “one size fits all”. Each event and client is unique and we believe our services should be as well. We know that it should be “Can I hire a planner?” not “Can I afford one?”.</p>
                <div className="flex items-center gap-6 mt-10">
                    <div className="space-y-2 border-r">
                        <img src="/undraw_House_searching_re_stk8.png" alt="" />
                        <p className="text-xs">Find the perfect venue for free</p>
                    </div>
                    <div className="space-y-2 border-r">
                        <img src="/undraw_Content_team_re_6rlg.png" alt="" />
                        <p className="text-xs">Connect with the best vendor</p>
                    </div>
                    <div className="space-y-2 border-r">
                        <img src="/undraw_Active_support_re_b7sj.png" alt="" />
                        <p className="text-xs">Let us help you with the event</p>
                    </div>
                    <div className="space-y-2">
                        <img src="/undraw_Party_re_nmwj.png" alt="" />
                        <p className="text-xs">Enjoy the party with your friends</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;