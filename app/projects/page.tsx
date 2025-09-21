import ProjectsSection from '../components/ProjectsSection';
import Navigation from '../components/Navigation';

export default function ProjectsPage() {
	return (
		<main className="min-h-screen bg-[#1A1A1A] text-white overflow-x-hidden">
			<ProjectsSection />
			<Navigation />
		</main>
	);
}
