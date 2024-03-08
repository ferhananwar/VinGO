import React from 'react';
import {Container, InputGroup, Button, FormControl, Row, Card, Pagination} from 'react-bootstrap';
import '../../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Browse.css';
import {useState, useEffect} from 'react';
import '../Pagination'

const CLIENT_ID="c586ada9ac2745b489630b73d4ea8466";
const CLIENT_SECRET="3c219b7735f74f298e13ee0435f06674";

function Browse() {
  const [searchInput, setSearchInput] = useState("");
  const [accessToken, setAccessToken] = useState("");
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    //API Access Token
    var authParameters = {
      method: 'POST',
      headers:{
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: 'grant_type=client_credentials&client_id='+CLIENT_ID+'&client_secret='+CLIENT_SECRET
    }

    fetch('https://accounts.spotify.com/api/token', authParameters)
      .then(result=>result.json())
      .then(data=>setAccessToken(data.access_token))
  }, [])
  
  //Search
  async function search() {
    console.log("Search for "+ searchInput);
  

    //Get request using search to get the artist id
    var searchParameters = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + accessToken
      }
    }
    var artistID = await fetch('https://api.spotify.com/v1/search?q=' + searchInput + '&type=artist', searchParameters)
      .then(response=>response.json())
      .then(data => { return data.artists.items[0].id })

    //Get request with artist id to grab all the albums from that artist
    var returnedAlbums = await fetch('https://api.spotify.com/v1/artists/'+artistID+'/albums'+'?include_groups=album&market=CA&limit=50', searchParameters)
      .then(response => response.json())
      .then(data => { setAlbums(data.items); })
    //Display those albums to the user
  }

  //Pagination for albums
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(8);
  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentAlbums = albums.slice(firstPostIndex, lastPostIndex);

  return (
    <div className='browse-container'>
      <Container className='searchBar'>
        <InputGroup className="mb-3 sch-field" sizes="lg">
          
          <FormControl
            className='sch-input'
            size="md"
            placeholder="Search For Artist"
            type="input"
            onKeyPress={event =>{
                if(event.key == "Enter"){
                  search();
                }
              }
            }
            onChange={event=>setSearchInput(event.target.value)}
          />
          </InputGroup>

          <Button onClick={search} className='sch-button'>
            Search
          </Button>
  
      </Container>
      <Container>
        <p className='results'>Showing results for "{searchInput}"</p>
        <p className='results-per-page'>Showing {firstPostIndex} - {lastPostIndex} of {albums.length} results</p>
        <Row className='mx-2 row row-cols-4'>
          {currentAlbums.map( (currentAlbums) => {
            return (
              <Card className='album'>
              <Card.Img src={currentAlbums.images[0].url} className='album-img'/>
                <Card.Body>
                  <Card.Title className='album-title'>{currentAlbums.name}</Card.Title>
                </Card.Body>
              </Card>
            )
          })}
        </Row>
        <Pagination
          totalPosts={albums.length}
          postsPerPage={postsPerPage}
        />
      </Container>

    </div>
  )
}

export default Browse;