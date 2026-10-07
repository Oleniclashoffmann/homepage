// Everything personal lives here. Edit this file first.

export const profile = {
  name: 'Ole Hoffmann',
  location: 'Munich, DE',
  photo: '/img/portrait-bw.jpg', // black & white, square; shown as a circle above the name
  tagline: 'Real-time computer vision & GPU-accelerated SLAM',
  about:
    'I am interested in perception engineering and robotics engineering. Building systems that let robots ' +
    'perceive, understand and move through the real world.',
  // Shown as [ label ] links under the About text. Leave a URL empty to hide it.
  links: {
    GitHub: 'https://github.com/Oleniclashoffmann',
    LinkedIn: 'https://www.linkedin.com/in/ole-hoffmann/',
    Email: 'mailto:ole.hoffmann@tum.de',
  } as Record<string, string>,
};

// Start page timelines (Education, Industry), newest first, Karpathy-style. One entry per station.
//   html:     the main line; may contain <a href="...">links</a>
//   children: activities at that station, shown indented underneath (HTML, optionally with their own period and bullets)
export type TimelineEntry = {
  html: string;
  period?: string; // shown in gray at the right of the main line, e.g. '2019 – 2024'
  bullets?: string[];
  children?: (string | { html: string; period?: string; bullets?: string[] })[];
};

export const educationTimeline: TimelineEntry[] = [
  {
    period: '2024 – now',
    html: 'M.Sc. in Robotics, Cognition, Intelligence at the <a href="https://www.tum.de/en/">Technical University of Munich (TUM)</a>.',
    children: [
      { html: 'Graduate researcher at the <a href="https://cvg.cit.tum.de/">Computer Vision Group</a> (Prof. Daniel Cremers).',
        bullets: [
          'Developed VkVIO: <a href="https://arxiv.org/abs/2609.30459">arXiv:2609.30459</a>',
        ] },
    ],
  },
  {
    period: '2019 – 2024',
    html: 'B.Sc. in Electrical Engineering at <a href="https://www.tuhh.de/tuhh/en/">Hamburg University of Technology (TUHH)</a>.',
    children: [
      { html: 'Undergraduate researcher at the <a href="https://mtec.et8.tuhh.de/">Institute of Medical Technology and Intelligent Systems (MTEC)</a> (Prof. Alexander Schlaefer).',
        bullets: [
          'Developed computer vision algorithms that track needles in ultrasound images, helping doctors guide them to target regions.',
        ] },
      { period: 'Aug 2021 – Feb 2022',
        html: 'Abroad at <a href="https://www.ltu.se/en">Luleå University of Technology</a>.',
        bullets: [
          'Programmed microcontrollers near the Arctic Circle.',
        ] },
    ],
  },
];

export const industryTimeline: TimelineEntry[] = [
  {
    period: 'Nov 2023 – Feb 2024',
    html: 'Intern at <a href="https://www.qiagen.com">QIAGEN</a>, Ann Arbor (USA).',
    bullets: ['Worked with Hamilton pipetting robots on the NeuMoDx microfluidic PCR system.'],
  },
  {
    period: 'May 2023 – Sep 2023',
    html: 'Working student at <a href="https://www.lischke.com">Lischke Consulting</a>, Hamburg (Germany).',
    bullets: ['Mastered the art of PowerPoint.'],
  },
];
export const publications = [
  {
    title: 'VkVIO: Cross-platform GPU Acceleration for Visual-Inertial Odometry with Vulkan',
    authors: 'Ole Hoffmann, Mateo de Mayo, Daniel Cremers',
    venue: 'arXiv:2609.30459, 2026',
    blurb: 'Accelerating Basalt on GPUs with Vulkan for cross-vendor compatibility, so it runs fast on hardware from NVIDIA and Apple to low-cost single board computers like the Radxa.',
    href: 'https://arxiv.org/abs/2609.30459',
    image: '/img/papers/vkvio-teaser.svg', // teaser figure (Fig. 1), vector source from ICRA-Paper/figures/source/teaser.svg
    links: { arXiv: 'https://arxiv.org/abs/2609.30459', pdf: 'https://arxiv.org/pdf/2609.30459' } as Record<string, string>,
  },
];
