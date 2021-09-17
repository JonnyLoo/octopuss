pragma solidity >=0.4.22 <0.9.0;

import '@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol';
import '@openzeppelin/contracts/access/Ownable.sol';
import '@openzeppelin/contracts/utils/Counters.sol';

contract Octopuss is Ownable, ERC721URIStorage {

  using Counters for Counters.Counter;
  Counters.Counter private _tokenIds;
  mapping(string => uint8) hashes;

  constructor() ERC721('Octopuss', 'OCTO') {
    mint('QmdtoRQ3g7upPYppZxPg1cpEW2ETYaZScaaRacStEM2cnD', 'https://gateway.pinata.cloud/ipfs/QmdE5eGFB75xoA7Dn6EQjysoUk6ZiauvBq1oUsmwhW3YHV');
  }

  function claim(string memory hash, string memory tokenURI) external returns (uint256) {
    return mint(hash, tokenURI);
  }

  function mint(string memory hash, string memory tokenURI) internal returns (uint256) {
    require(hashes[hash] != 1, 'no dupes pls');
    hashes[hash] = 1;
    uint256 tokenId = _tokenIds.current();
    _mint(msg.sender, tokenId);
    _setTokenURI(tokenId, tokenURI);
    _tokenIds.increment();
    return tokenId;
  }
}
