import CodeIllustration from "./CodeIllustration"

export default function CodeEditorOne() {
  return (
    <div className="flex flex-col w-full h-full mx-2 rounded-md bg-[rgb(36,39,82)] shadow-[20px_20px_50px_rgba(0,0,0,0.5)] overflow-hidden">
                        <div className="w-full h-[60%] mb-2 border-2 border-[rgb(113,235,249)] rounded-md overflow-hidden">
                            <div className="w-full h-fit bg-[rgb(59,62,91)] p-2">
                                <h3 className='font-bold'>Prompt</h3>
                            </div>
                            <div className="w-full h-[85%] p-2">
                                <h3 className='lg:text-[1rem] font-bold'>Max Profit With K Transactions</h3>
                                <div className="w-full h-fit my-0 flex flex-col justify-between">
                                    <div className="w-[90%] h-fit my-4">
                                        <CodeIllustration w='90%'/>
                                        <CodeIllustration w='100%'/>
                                        <CodeIllustration w='60%'/>
                                        <CodeIllustration w='80%'/>
                                        <CodeIllustration w='40%'/>
                                    </div>
                                    <div className="w-[90%] h-fit my-4">
                                        <CodeIllustration w='90%'/>
                                        <CodeIllustration w='100%'/>
                                        <CodeIllustration w='60%'/>
                                        <CodeIllustration w='80%'/>
                                        <CodeIllustration w='40%'/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full h-[40%]">
                            <div className="w-full h-fit min-h-[15%] p-2 bg-[rgb(59,62,91)] ">
                                <h3 className='lg:text-[1rem] font-bold'>Tests</h3>
                            </div>
                            <div className="w-full h-[82%] p-4 overflow-auto logs">
                                <div className="w-full p-2 h-[25%] bg-[rgba(255,255,255,0.32)] rounded-md mb-4"></div>
                                <div className="w-full p-2 h-[25%] bg-[rgba(255,255,255,0.32)] rounded-md mb-4"></div>
                                <div className="w-full p-2 h-[25%] bg-[rgba(255,255,255,0.32)] rounded-md mb-4"></div>
                                <div className="w-full p-2 h-[25%] bg-[rgba(255,255,255,0.32)] rounded-md mb-4"></div>
                                <div className="w-full p-2 h-[25%] bg-[rgba(255,255,255,0.32)] rounded-md mb-4"></div>
                            </div>
                        </div>
                    </div>
  )
}
