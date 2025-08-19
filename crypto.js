// import { useState } from "react";
// import { Card, CardContent } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { BarChart3, Database, Lightbulb, Brain, FileText } from "lucide-react";
// import { motion } from "framer-motion";

// export default function CryptoMigrationAnalysis() {
//     const [section, setSection] = useState("intro");

//     const sections = {
//         intro: ( <
//             Card className = "p-6 shadow-xl bg-gradient-to-br from-purple-500/10 to-pink-500/10" >
//             <
//             CardContent >
//             <
//             h1 className = "text-3xl font-bold mb-2" > 📊Crypto Adoption & Migration Analysis < /h1> <
//             p className = "text-lg mb-4" >
//             Our findings suggest that regions with higher international migrant populations often show stronger engagement with cryptocurrency tools— especially among the top 50 countries. <
//             /p> <
//             p className = "text-base italic" >
//             Excluding outliers like Central & Western Europe reveals a < b > moderate positive relationship < /b>
//             between migrant stock and crypto adoption. <
//             /p> <
//             /CardContent> <
//             /Card>
//         ),
//         approach: ( <
//             Card className = "p-6 shadow-xl" >
//             <
//             CardContent >
//             <
//             h2 className = "text-2xl font-semibold mb-3" > 🧠Summary of Analytical Approach < /h2> <
//             ul className = "list-disc ml-6 space-y-2" >
//             <
//             li > Cleaned datasets from Chainalysis & UN < /li> <
//             li > Normalized adoption rankings into 0– 1 scores < /li> <
//             li > Grouped countries by region & year < /li> <
//             li > Linked crypto adoption to migrant stock < /li> <
//             li > Visualized regional trends < /li> <
//             li > Correlation analysis to evaluate relationships < /li> <
//             /ul> <
//             /CardContent> <
//             /Card>
//         ),
//         datasets: ( <
//             Card className = "p-6 shadow-xl" >
//             <
//             CardContent >
//             <
//             h2 className = "text-2xl font-semibold mb-3" > 📁Datasets Used < /h2> <
//             div className = "space-y-4" >
//             <
//             div >
//             <
//             h3 className = "font-bold" > 1. Global Crypto Adoption Index(2022– 2024) < /h3> <
//             p > Source: Chainalysis | File: GCAI.xlsx < /p> <
//             /div> <
//             div >
//             <
//             h3 className = "font-bold" > 2. International Migrant Stock(2024) < /h3> <
//             p > Source: UN DESA | File: Migrant_Stock.xlsx < /p> <
//             /div> <
//             /div> <
//             /CardContent> <
//             /Card>
//         ),
//         highlights: ( <
//             Card className = "p-6 shadow-xl" >
//             <
//             CardContent >
//             <
//             h2 className = "text-2xl font-semibold mb-3" > 🔎Research Highlights < /h2> <
//             p className = "mb-4" > Crypto adoption is stronger in Sub - Saharan Africa, Central & Southern Asia, and Latin America. < /p> <
//             div className = "bg-gray-100 p-4 rounded-xl" >
//             <
//             p > < b > Correlation(all regions): < /b> 0.136 (weak)</p >
//             <
//             p > < b > Correlation(excluding C. & W.Europe): < /b> 0.647 (moderate positive)</p >
//             <
//             /div> <
//             /CardContent> <
//             /Card>
//         ),
//         limitations: ( <
//             Card className = "p-6 shadow-xl" >
//             <
//             CardContent >
//             <
//             h2 className = "text-2xl font-semibold mb-3" > ⚠️Limitations < /h2> <
//             ul className = "list-disc ml-6 space-y-2" >
//             <
//             li > Region labels standardized manually < /li> <
//             li > Crypto adoption rankings are ordinal, not volume - based < /li> <
//             li > Migrant data is 2024 only < /li> <
//             li > Small sample size per region < /li> <
//             /ul> <
//             /CardContent> <
//             /Card>
//         ),
//         future: ( <
//             Card className = "p-6 shadow-xl" >
//             <
//             CardContent >
//             <
//             h2 className = "text-2xl font-semibold mb-3" > 💡Future Research Ideas < /h2> <
//             ul className = "list-disc ml-6 space-y-2" >
//             <
//             li > Replace rankings with on - chain volume or wallet counts < /li> <
//             li > Investigate remittance corridors with blockchain data < /li> <
//             li > Incorporate policy environment & mobile access data < /li> <
//             li > Case studies(e.g., El Salvador’ s adoption) < /li> <
//             /ul> <
//             /CardContent> <
//             /Card>
//         ),
//         dependencies: ( <
//             Card className = "p-6 shadow-xl" >
//             <
//             CardContent >
//             <
//             h2 className = "text-2xl font-semibold mb-3" > 🧪Dependencies < /h2> <
//             p > The analysis used the following Python libraries: < /p> <
//             ul className = "list-disc ml-6 space-y-2" >
//             <
//             li > pandas < /li> <
//             li > matplotlib < /li> <
//             li > seaborn < /li> <
//             li > openpyxl < /li> <
//             li > scipy < /li> <
//             /ul> <
//             /CardContent> <
//             /Card>
//         ),
//     };

//     const navItems = [
//         { key: "intro", label: "Conclusion", icon: BarChart3 },
//         { key: "approach", label: "Approach", icon: Brain },
//         { key: "datasets", label: "Datasets", icon: Database },
//         { key: "highlights", label: "Highlights", icon: FileText },
//         { key: "limitations", label: "Limitations", icon: FileText },
//         { key: "future", label: "Future Research", icon: Lightbulb },
//         { key: "dependencies", label: "Dependencies", icon: FileText },
//     ];

//     return ( <
//         div className = "min-h-screen bg-gradient-to-br from-gray-50 to-gray-200 p-6" >
//         <
//         div className = "max-w-5xl mx-auto grid md:grid-cols-4 gap-6" > { /* Sidebar Navigation */ } <
//         div className = "col-span-1 space-y-3" > {
//             navItems.map(({ key, label, icon: Icon }) => ( <
//                 Button key = { key }
//                 variant = { section === key ? "default" : "outline" }
//                 className = "w-full flex items-center justify-start"
//                 onClick = {
//                     () => setSection(key) } >
//                 <
//                 Icon className = "w-4 h-4 mr-2" / > { label } <
//                 /Button>
//             ))
//         } <
//         /div>

//         { /* Main Content */ } <
//         motion.div key = { section }
//         initial = {
//             { opacity: 0, y: 10 } }
//         animate = {
//             { opacity: 1, y: 0 } }
//         transition = {
//             { duration: 0.4 } }
//         className = "col-span-3" >
//         { sections[section] } <
//         /motion.div> <
//         /div> <
//         /div>
//     );
// }