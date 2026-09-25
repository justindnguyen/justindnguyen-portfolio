/*
  ADDING A PROJECT

  Copy one complete project object, paste it before the final ]; and replace
  its content. The homepage card and detail page are created automatically.

  Put screenshots and PDFs in public/projects/your-project-slug/.
  Then add them to the optional images and documents arrays shown below.
*/

export const projects = [
  {
    slug: "ubuntu-virtualbox-homelab",
    title: "Ubuntu VirtualBox Homelab",
    type: "IT Support Lab",
    status: "In progress",
    description: "A practical Linux support environment on a MacBook M2 for learning administration, secure remote access, permissions, and network troubleshooting.",
    highlights: [
      "Configured NAT and host-only networking with static addressing",
      "Practiced SSH keys, UFW rules, fail2ban, and unattended updates",
      "Built a Samba share with group permissions and troubleshooting notes"
    ],
    tools: ["Ubuntu", "VirtualBox", "SSH", "UFW", "Samba"],
    progress: [
      { stage: "01", title: "Built the base environment", text: "Created the Ubuntu virtual machine on a MacBook M2 and documented the initial configuration." },
      { stage: "02", title: "Configured network access", text: "Added NAT and host-only adapters, then assigned addressing for internet and host-to-VM communication." },
      { stage: "03", title: "Added secure administration", text: "Set up SSH key access and began validating UFW, fail2ban, and unattended update behavior." },
      { stage: "04", title: "Created shared storage", text: "Configured a Samba share and practiced group-based file permissions." }
    ],
    notes: [
      "Record the issue, environment, commands used, observed result, and next test.",
      "Keep NAT and host-only adapter purposes separate when checking routes.",
      "Test access from a second client instead of relying only on the server state."
    ],
    learned: [
      "A configuration is not complete until the expected behavior is tested from the client side.",
      "Multiple virtual adapters can change routing and make a correct service appear unreachable.",
      "Permissions are easier to troubleshoot when user, group, directory, and service settings are checked separately."
    ],
    problems: [
      {
        title: "Host could not reach the VM",
        status: "Troubleshooting",
        problem: "The host-only connection returned a host unreachable message.",
        approach: "Checked adapter assignment, interface state, IP address, subnet, and route selection before retesting connectivity.",
        outcome: "Documented a repeatable network-check sequence for the next test."
      },
      {
        title: "SSH remained available after a deny rule",
        status: "Investigating",
        problem: "An expected UFW deny rule did not immediately block the client connection.",
        approach: "Reviewed rule order, active sessions, the targeted interface, and the difference between an existing session and a new connection.",
        outcome: "Turned the result into a firewall validation checklist instead of assuming the rule was effective."
      }
    ],
    images: [],
    documents: []
  },
  {
    slug: "windows-hardware-deployment",
    title: "Windows Hardware and Deployment Practice",
    type: "Hands-on Practice",
    status: "Ongoing",
    description: "Hands-on work upgrading computer hardware, installing Windows, resolving driver issues, and verifying that devices function correctly.",
    highlights: [
      "Upgraded RAM and SSDs and installed graphics cards",
      "Installed Windows from USB and reimaged drives",
      "Used Device Manager and Disk Management during troubleshooting"
    ],
    tools: ["Windows 11", "Device Manager", "Disk Management", "PC Hardware"],
    progress: [
      { stage: "01", title: "Prepared hardware", text: "Installed and upgraded RAM, SSDs, and graphics cards while checking compatibility and physical connections." },
      { stage: "02", title: "Deployed Windows", text: "Installed Windows from USB and reimaged drives to return systems to a clean working state." },
      { stage: "03", title: "Restored drivers", text: "Used Device Manager to identify missing devices and install the appropriate driver packages." },
      { stage: "04", title: "Verified the result", text: "Checked storage, device status, networking, and normal startup behavior before considering the work complete." }
    ],
    notes: [
      "Check Device Manager immediately after imaging so missing drivers are visible early.",
      "Confirm the target disk before formatting, partitioning, or reimaging.",
      "A successful Windows installation is only the beginning; drivers and device tests still matter."
    ],
    learned: [
      "A missing network adapter after reimaging is often a driver problem rather than failed hardware.",
      "Changing one component at a time makes hardware troubleshooting easier to verify.",
      "A final checklist prevents a system from being returned with an unnoticed device or storage issue."
    ],
    problems: [
      {
        title: "Network adapter missing after reimage",
        status: "Resolved",
        problem: "Windows completed setup, but the network adapter was unavailable.",
        approach: "Inspected Device Manager, identified the missing driver, and installed the correct package.",
        outcome: "The adapter appeared correctly and network connectivity was restored."
      },
      {
        title: "Drive needed a clean deployment",
        status: "Resolved",
        problem: "A returned device needed its storage restored to a normal Windows configuration.",
        approach: "Reimaged the drive, checked partitions in Disk Management, and completed post-install verification.",
        outcome: "The device returned to a clean, usable Windows state."
      }
    ],
    images: [],
    documents: []
  },
  {
    slug: "windows-help-desk-lab",
    title: "Windows Help Desk Lab",
    type: "Support Lab",
    status: "Planned",
    description: "A Windows 11 practice environment for common support scenarios involving accounts, applications, printers, and endpoint troubleshooting.",
    highlights: [
      "Practice MFA, least privilege, and account support workflows",
      "Troubleshoot printers, Outlook, OneDrive, and Teams",
      "Document fixes using ticket-style notes and runbooks"
    ],
    tools: ["Windows 11", "Microsoft 365", "Event Viewer", "Documentation"],
    progress: [
      { stage: "01", title: "Defined the lab scope", text: "Selected realistic Windows 11 endpoint and Microsoft 365 support scenarios to practice." },
      { stage: "02", title: "Outlined documentation", text: "Prepared a ticket format covering the issue, environment, troubleshooting steps, result, and next action." },
      { stage: "03", title: "Queued the first scenarios", text: "Planned printer mapping, Teams sign-in, Outlook profile, OneDrive sync, and Event Viewer exercises." }
    ],
    notes: [
      "Use fictional accounts and test data throughout the lab.",
      "Capture screenshots only when they clarify a troubleshooting step.",
      "Write the expected result before testing each scenario."
    ],
    learned: [
      "The lab is currently planned, so lessons will be added only after each scenario is completed and verified.",
      "Defining success criteria first will make the final runbooks more useful and easier to repeat."
    ],
    problems: [
      {
        title: "Printer mapping scenario",
        status: "Queued",
        problem: "Simulate a user who cannot connect to or print through a mapped printer.",
        approach: "Check connectivity, queue state, default printer, driver, and Print Spooler in a controlled sequence.",
        outcome: "Results will be added after the scenario is completed."
      },
      {
        title: "Microsoft 365 sign-in scenario",
        status: "Queued",
        problem: "Simulate an Outlook, OneDrive, or Teams profile that cannot authenticate or sync normally.",
        approach: "Check account state, connectivity, cached credentials, profile health, and application-specific errors.",
        outcome: "Results will be added after the scenario is completed."
      }
    ],
    images: [],
    documents: []
  }
];
