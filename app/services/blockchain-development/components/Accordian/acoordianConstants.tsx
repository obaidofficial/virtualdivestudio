import { AccordianItemData } from "../../../../../constants/accordianItemData";

export const DEFAULT_ACCORDIAN_ITEMS: AccordianItemData[] = [
  {
    id: "1",
    title: "What is blockchain development?",
    content: (
      <div>
        <p>
          Blockchain development involves creating decentralized applications
          (DApps), smart contracts, or entire blockchain networks using
          blockchain technology. It includes designing, coding, testing,
          deploying, and maintaining blockchain-based solutions.
        </p>
      </div>
    ),
  },
  {
    id: "2",
    title: "What are the key components of blockchain development?",
    content: (
      <div>
        <p>To begin game porting, you will need</p>
        <p>Key components of blockchain development include:</p>
        <ul className="list-disc list-outside pl-5">
          <li>
            <b>Smart contracts:</b> Self-executing contracts with predefined
            rules and conditions encoded on the blockchain.
          </li>
          <li>
            <b>Consensus mechanisms:</b> Algorithms used to achieve agreement on
            the state of the blockchain among network participants.
          </li>
          <li>
            <b>Data encryption:</b> Techniques used to secure data stored on the
            blockchain.
          </li>
          <li>
            <b>Node implementation:</b> Software implementations that enable
            participation in the blockchain network.
          </li>
          <li>
            <b>User interfaces:</b> Interfaces for interacting with
            blockchain-based applications and networks.
          </li>
        </ul>
      </div>
    ),
  },
  {
    id: "3",
    title:
      "How does blockchain integration enhance security and credibility in education?",
    content: (
      <div>
        <p>
          Blockchain integration ensures the security and integrity of
          educational records and certifications, providing trusted credentials.
          This streamlines administration processes and enhances credibility by
          preventing fraud and tampering.
        </p>
      </div>
    ),
  },
  {
    id: "4",
    title:
      "How does Virtual Dive contribute to transforming the education industry with technology?",
    content: (
      <div>
        <p>
          Virtual Dive leverages technology to bring exciting changes to the
          education domain, making learning more flexible, interactive, and
          effective. By offering innovative solutions such as interactive
          learning platforms, VR/AR integration, and blockchain solutions,
          Virtual Dive helps institutions adapt to the digital era.
        </p>
      </div>
    ),
  },
  {
    id: "5",
    title: "Why should I choose Virtual Dive for my education solutions?",
    content: (
      <div>
        <p>
          Clients choose Virtual Dive for our unbeatable pricing, transparent
          communication, and dedication to delivering high-quality solutions.
          Our expertise in technology and commitment to customer satisfaction
          make us a trusted partner for educational institutions.
        </p>
      </div>
    ),
  },
];
